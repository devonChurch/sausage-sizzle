import { APIGatewayEvent } from '../../node_modules/@types/aws-lambda/';
import { origin as requiredOrigin } from './config';

// The required CORS headers when generating a response POST request.
const createHeaders = (suppliedOrigin: string) => {
  const isWww = suppliedOrigin.includes('//www.');
  const prepend = isWww ? 'https://www.' : 'https://';

  return {
    // Required for CORS support to work
    'Access-Control-Allow-Origin': `${prepend}${requiredOrigin}`,
    // Required for cookies, authorization headers with HTTPS
    'Access-Control-Allow-Credentials': true,
  };
};

const cors = {
  createHeaders,
};

export { cors as default, createHeaders };
