import * as AWS from 'aws-sdk';
import {cors} from '../utils';
import EmailContactFormAlert from '../actions/email-contact-form-alert';
import { APIGatewayEvent, Context, ProxyCallback } from '../../node_modules/@types/aws-lambda/';
// import AWSLambda = require('../../node_modules/@types/aws-lambda/');

// import AWSLambda = require('@types/aws-lambda');
// import { APIGatewayEvent, Context, ProxyCallback } from '@types/aws-lambda';
// import { APIGatewayEvent, Context, ProxyCallback } from AWSLambda;
// const { APIGatewayEvent, Context, ProxyCallback } = AWSLambda;

// import foo from AWSLambda;

// const { APIGatewayEvent, Context, ProxyCallback } = AWSLambda;

const ses:AWS.SES = new AWS.SES();
const emailContactFormAlert = new EmailContactFormAlert(ses);
const handler = async (event: APIGatewayEvent, context: Context, callback: ProxyCallback) => {

    try {

        const formData = JSON.parse(event.body);

        await emailContactFormAlert.sendEmail(formData);

        callback(null, {
            headers: cors.headers,
            statusCode: 200,
            body: JSON.stringify(formData),
        });

    } catch (error) {

        callback(error);
    
    }

};

export default handler;
