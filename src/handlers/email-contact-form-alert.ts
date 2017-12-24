import * as AWS from 'aws-sdk';
import { cors } from '../utils';
import EmailContactFormAlert from '../actions/email-contact-form-alert';
import { APIGatewayEvent, Context, ProxyCallback } from '../../node_modules/@types/aws-lambda/';

const ses: AWS.SES = new AWS.SES();
const emailContactFormAlert = new EmailContactFormAlert(ses);
const handler = async (event: APIGatewayEvent, context: Context, callback: ProxyCallback) => {
  console.log(event);
  try {
    const formData = JSON.parse(event.body);

    // "serverless" and "serverless-offline" format their header objects lightly
    // differently therefore we grab both "origin" / "Origin" references and take
    // the one that has content.
    const { origin, Origin } = event.headers;
    const handlerOrigin = origin || Origin;

    await emailContactFormAlert.sendEmail(formData);

    callback(null, {
      headers: cors.createHeaders(handlerOrigin),
      statusCode: 200,
      body: JSON.stringify(formData),
    });
  } catch (error) {
    callback(error);
  }
};

export default handler;
