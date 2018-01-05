import { config, email as emailTemplate } from '../../utils';

interface Imanifest {
  fileName: string;
  width: number;
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
  return manifest
    .sort((a: Imanifest, b: Imanifest) => a.width - b.width)
    .reduce((acc: Igrouping, item: Imanifest) => {
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
  const noThumbnail = 'http://assets.enhancedigital.co.nz/email/no-thumbnail.png';
  const links = {
    old: createLink('old'),
    new: createLink('new'),
    compare: createLink('compare'),
    thumb: createLink('thumb'),
  };

  switch (true) {
    case status === 'noOld':
      return {
        ...links,
        old: '',
        thumb: noThumbnail,
      };

    case status === 'noNew':
      return {
        ...links,
        new: '',
        thumb: noThumbnail,
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

const createThumbnail = (link: string) => {
  const noThumbnail = 'http://assets.enhancedigital.co.nz/email/no-thumbnail.png';

  return `<img src="${link ||
    noThumbnail}" alt="thumbnail" style="background: #ececec; border: 3px solid #cacaca; border-radius: 3px; margin: 0 0 16px; Maring: 0 0 16px; padding: 10px;">`;
};

const createLinkList = (links: { [index: string]: string }) => {
  const noLinkStyles = 'opacity: 0.25; text-decoration: line-through;';
  const createLink = (title: string, link: string) =>
    `<a href="${link || '#'}" style="${!link
      ? noLinkStyles
      : ''} Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">${title}</a>`;

  return `
        ${createLink('Previous', links.old)} |
        ${createLink('Current', links.new)} |
        ${createLink('Compare', links.compare)}
    `;
};

const createIcon = (status: string) => {
  const createLink = (type: string) =>
    `http://assets.enhancedigital.co.nz/email/comparison-${type}.png`;

  switch (true) {
    case status === 'match':
      return createLink('success');
    case status === 'noMatch':
      return createLink('error');
    default:
      return createLink('warning');
  }
};

const createSectionComparison = ({ fileName, width, percentage, status, bucket }: Imanifest) => {
  const icon = createIcon(status);
  const color = createComparisonColor(status);
  const links = createComparisonLinks(status, fileName, bucket);
  const message = createComparisonMessage(status, percentage);
  const linkList = createLinkList(links);
  const thumbnail = createThumbnail(links.thumb);

  return `
<th class="small-12 large-4 columns" style="Margin: 0 auto; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 177.33333px;">
    <table class="enhance-Results" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
        <tbody>
            <tr style="padding: 0; text-align: left; vertical-align: top;">
                <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                
                    <div class="enhance-ResultIcon" style="background-color: ${color}; background-image: url(${icon}); border-radius: 50%; height: 30px; margin-bottom: 16px; width: 30px;"></div>

                    <h5 style="Margin: 0; Margin-bottom: 10px; color: ${color}; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">
                        ${width}px
                    </h5>

                    ${thumbnail}
                    ${linkList}
                    
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
  const title = 'Site review';
  const description =
    'As part of the automated build sequence the following screenshot comparisons were generated. Please review and identify any anomalies.';
  const size = '780px';
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
