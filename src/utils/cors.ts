import { origin} from './config';

// The required CORS headers when generating a response POST request.
const headers = {
    // Required for CORS support to work
    'Access-Control-Allow-Origin': origin,
    // Required for cookies, authorization headers with HTTPS
    'Access-Control-Allow-Credentials': true
};

const cors = {
    headers
};

export { cors as default, headers};
