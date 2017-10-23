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
    const { name, email, message } = formData;
    const receiveFrom = 'notifydevon@gmail.com';
    const sendTo = 'kelsey@enhancedigital.co.nz';

    return {
      Destination: {
        ToAddresses: [sendTo],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: createEdmTemplate(formData),
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Name: ${name}, Email: ${email}, Message: ${message}.`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'You got an message!',
        },
      },
      ReturnPath: receiveFrom,
      Source: receiveFrom,
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
