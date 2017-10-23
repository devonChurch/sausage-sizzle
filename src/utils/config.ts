const keys = {
  access: AWS_ACCESS_KEY_ID,
  secret: AWS_SECRET_ACCESS_KEY,
};

const cloudFront = 'http://d1aktqwckjtk2m.cloudfront.net/';

const origin = 'http://enhancedigital.co.nz';

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

const config = { keys, cloudFront, origin, emails };

export { config as default, keys, cloudFront, origin, emails };
