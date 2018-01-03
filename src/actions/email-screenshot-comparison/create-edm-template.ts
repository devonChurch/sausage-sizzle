import { config, email as emailTemplate } from '../../utils';

interface Imanifest {
  fileName: string;
  width: string;
  section: string;
  percentage?: number;
  status: string;
  bucket?: string;
}

interface Igrouping {
  [index: string]: Imanifest[];
}

const { createScaffold, createSpacer } = emailTemplate;

const createSectionGroupings = (manifest: Imanifest[]): Igrouping => {
  return manifest.reduce((acc: Igrouping, item: Imanifest) => {
    const { section } = item;
    const group = acc[section] || [];

    return {
      ...acc,
      [section]: [...group, item],
    };
  }, {});
};

const createSectionTitle = (title: string) => `
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
    <tbody>
        <tr style="padding: 0; text-align: left; vertical-align: top;">
            <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                <h4 style="Margin: 0; Margin-bottom: 10px; color: #2095f2; font-family: Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">
                    <small style="color: #cacaca; font-size: 80%;">
                        ${title}:
                    </small>
                </h4>
            </th>
        </tr>
    </tbody>
</table>
`;

const createComparisonColor = (status: string) => {
  switch (true) {
    case status === 'match':
      return '#3adb76';
    case status === 'noMatch':
      return '#e23317';
    default:
      return '#ffae00';
  }
};

const createComparisonLinks = (status: string, fileName: string, bucket: string) => {
  const createLink = (folder: string) => `https://s3.amazonaws.com/${bucket}/${folder}/${fileName}`;
  const links = {
    old: createLink('old'),
    new: createLink('new'),
    compare: createLink('compare'),
  };

  switch (true) {
    case status === 'noOld':
      return {
        ...links,
        old: '#',
      };

    case status === 'noNew':
      return {
        ...links,
        new: '#',
      };

    default:
      return links;
  }
};

const createComparisonMessage = (status: string, percentage: number) => {
  switch (true) {
    case status === 'noOld':
      return 'No previous screenshot to compare';

    case status === 'noNew':
      return 'No current screenshot to compare';

    case status === 'noMatch':
      return `A mismatch percentage of ${percentage}%`;

    default:
      return '';
  }
};

const createSectionComparison = ({ fileName, width, percentage, status, bucket }: Imanifest) => {
  const color = createComparisonColor(status);
  const links = createComparisonLinks(status, fileName, bucket);
  const message = createComparisonMessage(status, percentage);

  return `
<th class="small-12 large-4 columns" style="Margin: 0 auto; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 177.33333px;">
    <table class="enhance-Results" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
        <tbody>
            <tr style="padding: 0; text-align: left; vertical-align: top;">
                <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                
                    <div class="enhance-ResultIcon" style="background: ${color}; border-radius: 50%; height: 30px; margin-bottom: 16px; width: 30px;"></div>
                    
                    <h5 style="Margin: 0; Margin-bottom: 10px; color: ${color}; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">
                        ${width}px
                    </h5>
                   
                    <a href="${links.old}" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">Previous</a> |
                    <a href="${links.new}" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">Current</a> |
                    <a href="${links.compare}" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">Comparison</a>
                    
                    <p style="Margin: 0; Margin-bottom: 10px; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; hyphens: initial !important; line-height: 1.3; margin: 0; margin-bottom: 10px; margin-top: 8px; padding: 0; text-align: left;">
                        ${message}
                    </p>
                
                </th>
            </tr>
        </tbody>
    </table>
  </th>
    `;
};

const createEdmTemplate = (manifest: Imanifest[]) => {
  const title = 'You have a message';
  const description = 'A potential client has completed your contact form.';
  const size = '680px';
  const sections = createSectionGroupings(manifest);
  const content = Object.keys(sections)
    .map(section => {
      const sectionTitle = createSectionTitle(section);
      const comparisons = sections[section].map(createSectionComparison).join('');

      return `
${sectionTitle}
<table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
    <tbody>
        <tr style="padding: 0; text-align: left; vertical-align: top;">
            ${comparisons}
        </tr>
    </tbody>
</table>
${createSpacer('16px')}
        `;
    })
    .join('');

  return createScaffold(content, title, description, size);
};

export default createEdmTemplate;
