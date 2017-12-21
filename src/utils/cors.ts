import { APIGatewayEvent } from '../../node_modules/@types/aws-lambda/';
import { isProduction, origin as requiredOrigin } from './config';

const querySubdomain = (suppliedOrigin: string) => {
  const subStage = '://stage.';
  const subWww = '://www.';
  const subDefault = '://';

  return [subStage, subWww].reduce((acc, subdomain) => {
    const isMatch = suppliedOrigin.includes(subdomain);

    return isMatch ? subdomain : acc;
  }, subDefault);
};

// Because "Access-Control-Allow-Origin" only accepts a single value and we have
// multiple origins that we need to support...
//
// + stage.enhancedigital.co.nz
// + www.enhancedigital.co.nz
// + enhancedigital.co.nz
//
// We need to build up the correct suported origin based on the supplied origin
// values. This means that we query the supplied origin and build a custom Enhance
// Digital specific origin that reflects the supplied versions properties (HTTP / HTTPS)
// or what subdomain is referenced.
const createAllowedOrigin = (suppliedOrigin: string) => {
  const protocol = suppliedOrigin.startsWith('https') ? 'https' : 'http';
  const subdomain = querySubdomain(suppliedOrigin);

  return `${protocol}${subdomain}${requiredOrigin}`;
};

// The required CORS headers when generating a response POST request.
const createHeaders = (suppliedOrigin: string) => {
  const allowedOrigin = createAllowedOrigin(suppliedOrigin);

  return {
    // Required for CORS support to work
    'Access-Control-Allow-Origin': allowedOrigin,
    // Required for cookies, authorization headers with HTTPS
    'Access-Control-Allow-Credentials': true,
  };
};

const cors = {
  createHeaders,
};

export { cors as default, createHeaders };
