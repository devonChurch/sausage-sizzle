import * as AWS from 'aws-sdk';
import { cors } from '../utils';
import EmailScreenshotComparison from '../actions/email-screenshot-comparison';
import { APIGatewayEvent, Context, ProxyCallback } from '../../node_modules/@types/aws-lambda/';

interface ICodePipelineEvent {
  'CodePipeline.job': {
    id: string;
    accountId: string;
    data: {
      actionConfiguration: {
        configuration: {
          FunctionName: string;
          UserParameters: string;
        };
      };
      inputArtifacts: [string];
      outputArtifacts: [string];
      artifactCredentials: {
        sessionToken: string;
        secretAccessKey: string;
        accessKeyId: string;
      };
    };
  };
}

const codepipeline = new AWS.CodePipeline();
const ses: AWS.SES = new AWS.SES();
const s3 = new AWS.S3();
const emailScreenshotComparison = new EmailScreenshotComparison(ses, s3);
const handler = async (event: ICodePipelineEvent, context: Context, callback: ProxyCallback) => {
  console.log('event', JSON.stringify(event, null, 2));
  const job = event['CodePipeline.job'];
  const jobId = job.id;

  try {
    const { UserParameters } = job.data.actionConfiguration.configuration;
    const { bucket } = JSON.parse(UserParameters);

    await emailScreenshotComparison.sendEmail(bucket);

    codepipeline.putJobSuccessResult({ jobId }, (error, data) => {
      if (error) {
        context.fail(error);
      } else {
        context.succeed('success');
      }
    });
  } catch (error) {
    console.log(error);
    const errorParams = {
      jobId,
      failureDetails: {
        message: error,
        type: 'JobFailed',
        externalExecutionId: '',
      },
    };
    codepipeline.putJobFailureResult(errorParams, error => context.fail(error));
  }
};

export default handler;

// {
//   "CodePipeline.job": {
//       "id": "fe1bb779-b546-426a-946c-fe12cf61c349",
//       "accountId": "486484741372",
//       "data": {
//           "actionConfiguration": {
//               "configuration": {
//                   "FunctionName": "enhance-digital-dev-emailScreenshotComparison",
//                   "UserParameters": "{\"bucket\":\"enhance-digital-screenshots-stage\"}"
//               }
//           },
//           "inputArtifacts": [],
//           "outputArtifacts": [],
//           "artifactCredentials": {
//               "sessionToken": "AgoGb3JpZ2luEM///////////wEaCXVzLWVhc3QtMSKAAiGaO7M1LmRPuMHv/PzSLZM4HwwoftCecKcIPS2TEzkkHlE+ZIi5/kFhpSvpiaUrognj+b9zgBjUhFFv+EdCUNXabeavmVnt3R/P+IyFnufI1soPFspVpZ/u+RFu3MkqL0YdGIvEFX8+zwMd48m2p7qw48kC0bc6mCa6suTcsKfX0j+aSS9ThlLti1azssv8BN3O6gP0A7WzLi9UTaprmzZjkxBpaLcDGSkht5nv4WJY+IBjXGn4/Hl/9hODhki+fdZ/6skazb/Mjrwhlvd9QRnF4VepuIi3HrxDg6+DLfLBFBckdVKctig8SpWhE0rXuJEZHFTchzXYPz1TW6N1ePEq9AMIVBAAGgw0ODY0ODQ3NDEzNzIiDLnVyrqtflkjARGnRyrRA6R18x5dXT/30HiapNO4ijjMdmqHuurgKDYZgAUwIrh/xozfSL/wsw9Kg8E73TIAh+Swrfp+fnHchYoH/y3vcRf4s+NvOlpAAyLOj90sDfh8Gi8zfAubf7Zkq6OAUDvjQABa7NNgBVLLUFSYPSFLHpMZtno/enRZ+liIfTbM2rYF/ptKwDT6rjcBkE7Z5agWk/w9pV6+jsg8Jqtf0SKyOPkpa4Ct1mcLKeJhtk9zWJ9JmmwAP4SHmPq7zwyK0b5X+39NnOWJ8EzxPOkeKHv0Tc+ESQMIOM1M/TzsyjjBQDNiscqlrGYzYOKq7KmdwAKL+kD45HwHL7kicdkDziLcuAFaQodkdhDJb+upuG0kj9WYYnX0fvoPsgGP5Pna47PRphbIlA/DiW7gkm0gCvwzMIUpRZMDUwKfQ3NJi0190RocsJUDJPSmjbwuBb8twqHvO2tUh4x5phIniq1mBGfgPaVON0/PCcYJ5z8x9KJScAvWEbfkzPVV30fP5Z0bG5B9hBS2bnUhaiD6D9qnw9GwYPcp+pe/Pc4YAlzpfcJYtuQ4z6bBgbA273jD9F55MqX6sJPPTJ8czYa2n+fDFHF3C3Wo0Un2EmAdK6jK/xDIhshNZTCx0YHSBQ==",
//               "secretAccessKey": "B26t9w1fJLsr2wZ85cS1zzrpHeX8+b647/cHHLLB",
//               "accessKeyId": "ASIAIBAN63DAHOHVR2SA"
//           }
//       }
//   }
// }
