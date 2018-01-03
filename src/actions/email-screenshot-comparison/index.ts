import { config } from '../../utils';
import createEdmTemplate from './create-edm-template';

interface Imanifest {
  fileName: string;
  width: string;
  section: string;
  percentage?: number;
  status: string;
  bucket?: string;
}

class EmailScreenshotComparison {
  public ses: AWS.SES;
  public s3: AWS.S3;

  constructor(ses: AWS.SES, s3: AWS.S3) {
    this.ses = ses;
    this.s3 = s3;
  }

  public getManifest(bucket: string): Promise<any> {
    const params = {
      Bucket: bucket,
      Key: 'manifest.json',
    };

    return new Promise((resolve, reject) => {
      this.s3.getObject(params, (error, response) => {
        if (error) {
          reject(error);
        } else {
          console.log('>>> from s3', response);
          const manifest = response.Body.toString();
          resolve(manifest);
        }
      });
    });

    /*
      data = {
       AcceptRanges: "bytes", 
       ContentLength: 3191, 
       ContentType: "image/jpeg", 
       ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
       LastModified: <Date Representation>, 
       Metadata: {
       }, 
       TagCount: 2, 
       VersionId: "null"
      }
      */

    /*
    return [
      {
        fileName: 'contact-1200.png',
        width: '1200',
        section: 'contact',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'contact-320.png',
        width: '320',
        section: 'contact',
        status: 'noNew',
      },
      {
        fileName: 'contact-600.png',
        width: '600',
        section: 'contact',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'contact-900.png',
        width: '900',
        section: 'contact',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'home-1200.png',
        width: '1200',
        section: 'home',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'home-320.png',
        width: '320',
        section: 'home',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'home-600.png',
        width: '600',
        section: 'home',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'home-900.png',
        width: '900',
        section: 'home',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'services-320.png',
        width: '320',
        section: 'services',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'services-600.png',
        width: '600',
        section: 'services',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'services-900.png',
        width: '900',
        section: 'services',
        percentage: 0,
        status: 'match',
      },
      {
        fileName: 'services-1200.png',
        width: '1200',
        section: 'services',
        status: 'noOld',
      },
    ];
    */
  }

  public createContract(manifest: Imanifest[]) {
    const { devon } = config.emails;
    const sender = devon;
    const receiver = devon;
    const Charset = 'UTF-8';

    return {
      Destination: {
        ToAddresses: [receiver],
      },
      Message: {
        Body: {
          Html: { Charset, Data: createEdmTemplate(manifest) },
          Text: { Charset, Data: JSON.stringify(manifest, null, 2) },
        },
        Subject: { Charset, Data: 'Site review' },
      },
      Source: sender,
    };
  }

  public async sendEmail(bucket: string) {
    const manifest = await this.getManifest(bucket);
    const enrichedManifest = manifest.map((item: Imanifest) => ({ ...item, bucket }));
    const contract = this.createContract(enrichedManifest);

    return new Promise((resolve, reject) => {
      this.ses.sendEmail(contract, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default EmailScreenshotComparison;
