import { config, email as emailTemplate } from '../../utils';

interface IedmData {
  name: string;
  email: string;
  message: string;
}

const { createScaffold, createSpacer } = emailTemplate;

const createContactItem = (title: string, description: string) => `
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
    <tbody>
        <tr style="padding: 0; text-align: left; vertical-align: top;">
            <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                <h4 style="Margin: 0; Margin-bottom: 10px; color: #2095f2; font-family: Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">
                    <small style="color: #cacaca; font-size: 80%;">
                        ${title}:
                    </small>
                </h4>
                <p class="small-text-left" style="Margin: 0; Margin-bottom: 10px; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: initial !important; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    ${description}
                </p>
            </th>
        </tr>
    </tbody>
</table>
`;

const createEdmTemplate = ({ name, email, message }: IedmData) => {
  const title = 'You have a message';
  const description = 'A potential client has completed your contact form.';
  const content = `
        ${createContactItem('Name', name)}
        ${createSpacer('16px')}
        ${createContactItem('Email', email)}
        ${createSpacer('16px')}
        ${createContactItem('Message', message)}
    `;

  return createScaffold(content, title, description);
};

export default createEdmTemplate;
