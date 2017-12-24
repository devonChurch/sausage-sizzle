const isProduction = NODE_ENV === 'production';

const keys = {
  access: AWS_ACCESS_KEY_ID,
  secret: AWS_SECRET_ACCESS_KEY,
};

const cloudFront = 'http://d1aktqwckjtk2m.cloudfront.net/';

const origin = isProduction ? 'enhancedigital.co.nz' : 'localhost:8000';

const emails = {
  kelsey: 'kelsey@enhancedigital.co.nz',
  devon: 'notifydevon@gmail.com',
};

console.log(`
- - - - - - - - - - - - - - - 
access: ${keys.access}
secret: ${keys.secret}
- - - - - - - - - - - - - - - 
`);

const config = { isProduction, keys, cloudFront, origin, emails };

export { config as default, isProduction, keys, cloudFront, origin, emails };
