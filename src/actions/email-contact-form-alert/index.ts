import { config } from '../../utils';
import createEdmTemplate from './create-edm-template';

interface IformData {
  name: string;
  email: string;
  message: string;
}

class EmailContactFormAlert {
  public ses: AWS.SES;

  constructor(ses: AWS.SES) {
    this.ses = ses;
  }

  public createContract(formData: IformData) {
    const { kelsey, devon } = config.emails;
    const { name, email, message } = formData;
    const isTest = message.toLowerCase().trim() === 'test';
    const sender = devon;
    const receiver = isTest ? devon : kelsey;
    const Charset = 'UTF-8';

    return {
      Destination: {
        ToAddresses: [receiver],
      },
      Message: {
        Body: {
          Html: { Charset, Data: createEdmTemplate(formData) },
          Text: { Charset, Data: `Name: ${name}, Email: ${email}, Message: ${message}.` },
        },
        Subject: { Charset, Data: 'You got an message!' },
      },
      Source: sender,
    };
  }

  public sendEmail(formData: IformData) {
    const contract = this.createContract(formData);

    return new Promise((resolve, reject) => {
      this.ses.sendEmail(contract, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default EmailContactFormAlert;
