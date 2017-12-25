import * as AWS from 'aws-sdk';
import { cors } from '../utils';
// import EmailContactFormAlert from '../actions/email-contact-form-alert';
import { APIGatewayEvent, Context, ProxyCallback } from '../../node_modules/@types/aws-lambda/';

const ses: AWS.SES = new AWS.SES();
// const emailContactFormAlert = new EmailContactFormAlert(ses);
const handler = async (event: APIGatewayEvent, context: Context, callback: ProxyCallback) => {
  console.log(event);
  try {
    // const formData = JSON.parse(event.body);

    // await emailContactFormAlert.sendEmail(formData);

    callback(null, {
      // headers: cors.createHeaders(event.headers.origin),
      statusCode: 200,
      body: JSON.stringify({ complete: true }),
    });
  } catch (error) {
    callback(error);
  }
};

export default handler;
