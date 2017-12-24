import emailContactFormAlert from './handlers/email-contact-form-alert';
import emailScreenshotComparison from './handlers/email-screenshot-comparisons';

console.log(`
- - - - - - - - - - - - - - - 
version: 1.2
- - - - - - - - - - - - - - - 
`);
const handlers = {
  emailContactFormAlert,
  emailScreenshotComparison,
};

export { handlers as default, emailContactFormAlert, emailScreenshotComparison };
