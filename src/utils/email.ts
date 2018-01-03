// This form markup has been created using Zurb's Foundation email scaffold.
// I finesses the design in CodePen before using Zurb's "Inliner" utility to inline any styles and compress the HTML.

// CodePen:
// https://codepen.io/DevonChurch/pen/ppPmaM?editors=1100

// Inliner:
// https://foundation.zurb.com/emails/inliner-v2.html

const createStyles = () => `
<style>
  @media only screen{html{min-height:100%;background:#fff}}@media only screen and (max-width:596px){.small-float-center{margin:0 auto!important;float:none!important;text-align:center!important}.small-text-center{text-align:center!important}.small-text-left{text-align:left!important}.small-text-right{text-align:right!important}}@media only screen and (max-width:596px){.hide-for-large{display:block!important;width:auto!important;overflow:visible!important;max-height:none!important;font-size:inherit!important;line-height:inherit!important}}@media only screen and (max-width:596px){table.body table.container .hide-for-large,table.body table.container .row.hide-for-large{display:table!important;width:100%!important}}@media only screen and (max-width:596px){table.body table.container .callout-inner.hide-for-large{display:table-cell!important;width:100%!important}}@media only screen and (max-width:596px){table.body table.container .show-for-large{display:none!important;width:0;mso-hide:all;overflow:hidden}}@media only screen and (max-width:596px){table.body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:95%!important}table.body .column,table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}table.body .column .column,table.body .column .columns,table.body .columns .column,table.body .columns .columns{padding-left:0!important;padding-right:0!important}table.body .collapse .column,table.body .collapse .columns{padding-left:0!important;padding-right:0!important}td.small-1,th.small-1{display:inline-block!important;width:8.33333%!important}td.small-2,th.small-2{display:inline-block!important;width:16.66667%!important}td.small-3,th.small-3{display:inline-block!important;width:25%!important}td.small-4,th.small-4{display:inline-block!important;width:33.33333%!important}td.small-5,th.small-5{display:inline-block!important;width:41.66667%!important}td.small-6,th.small-6{display:inline-block!important;width:50%!important}td.small-7,th.small-7{display:inline-block!important;width:58.33333%!important}td.small-8,th.small-8{display:inline-block!important;width:66.66667%!important}td.small-9,th.small-9{display:inline-block!important;width:75%!important}td.small-10,th.small-10{display:inline-block!important;width:83.33333%!important}td.small-11,th.small-11{display:inline-block!important;width:91.66667%!important}td.small-12,th.small-12{display:inline-block!important;width:100%!important}.column td.small-12,.column th.small-12,.columns td.small-12,.columns th.small-12{display:block!important;width:100%!important}table.body td.small-offset-1,table.body th.small-offset-1{margin-left:8.33333%!important;Margin-left:8.33333%!important}table.body td.small-offset-2,table.body th.small-offset-2{margin-left:16.66667%!important;Margin-left:16.66667%!important}table.body td.small-offset-3,table.body th.small-offset-3{margin-left:25%!important;Margin-left:25%!important}table.body td.small-offset-4,table.body th.small-offset-4{margin-left:33.33333%!important;Margin-left:33.33333%!important}table.body td.small-offset-5,table.body th.small-offset-5{margin-left:41.66667%!important;Margin-left:41.66667%!important}table.body td.small-offset-6,table.body th.small-offset-6{margin-left:50%!important;Margin-left:50%!important}table.body td.small-offset-7,table.body th.small-offset-7{margin-left:58.33333%!important;Margin-left:58.33333%!important}table.body td.small-offset-8,table.body th.small-offset-8{margin-left:66.66667%!important;Margin-left:66.66667%!important}table.body td.small-offset-9,table.body th.small-offset-9{margin-left:75%!important;Margin-left:75%!important}table.body td.small-offset-10,table.body th.small-offset-10{margin-left:83.33333%!important;Margin-left:83.33333%!important}table.body td.small-offset-11,table.body th.small-offset-11{margin-left:91.66667%!important;Margin-left:91.66667%!important}table.body table.columns td.expander,table.body table.columns th.expander{display:none!important}table.body .right-text-pad,table.body .text-pad-right{padding-left:10px!important}table.body .left-text-pad,table.body .text-pad-left{padding-right:10px!important}table.menu{width:100%!important}table.menu td,table.menu th{width:auto!important;display:inline-block!important}table.menu.small-vertical td,table.menu.small-vertical th,table.menu.vertical td,table.menu.vertical th{display:block!important}table.menu[align=center]{width:auto!important}table.button.small-expand,table.button.small-expanded{width:100%!important}table.button.small-expand table,table.button.small-expanded table{width:100%}table.button.small-expand table a,table.button.small-expanded table a{text-align:center!important;width:100%!important;padding-left:0!important;padding-right:0!important}table.button.small-expand center,table.button.small-expanded center{min-width:0}}
</style>
`;

const createSpacer = (size: string) => `
<table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
  <tbody>
    <tr style="padding: 0; text-align: left; vertical-align: top;">
      <td height="${size}" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: ${size}; font-weight: normal; hyphens: auto; line-height: ${size}; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">&nbsp;</td>
    </tr>
  </tbody>
</table>
`;

const createDivider = () => `
<table class="hr" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
  <tbody>
    <tr style="padding: 0; text-align: left; vertical-align: top;">
      <th style="Margin: 20px auto; border: 0; border-radius: 99999px; border-top: 4px solid #cacaca; clear: both; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 0; line-height: 1.3; margin: 20px auto; max-width: 580px; padding: 0; text-align: left;"></th>
    </tr>
  </tbody>
</table>
`;

const createHeader = () => `
${createSpacer('16px')} 
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
  <tbody>
    <tr style="padding: 0; text-align: left; vertical-align: top;">
      <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
        <a href="https://enhancedigital.co.nz/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">
          <img class="enhance-Logo enhance-Logo--hero" src="http://assets.enhancedigital.co.nz/email/hero-logo.png" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: 250px;">
        </a>
      </th>
    </tr>
  </tbody>
</table>
${createSpacer('32px')}
${createDivider()}
${createSpacer('64px')}
`;

const createFooter = () => `
${createSpacer('48px')}
${createDivider()}
${createSpacer('32px')}
<table class="enhance-Footer row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
  <tbody>
    <tr style="padding: 0; text-align: left; vertical-align: top;">

      <th class="enhance-Footer-logoColumn columns first" style="Margin: 0 auto; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 80px;">
        <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
          <tbody>
            <tr style="padding: 0; text-align: left; vertical-align: top;">
              <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                <a href="https://enhancedigital.co.nz/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">
                  <img class="enhance-Logo enhance-Logo--footer" src="http://assets.enhancedigital.co.nz/email/footer-logo.png" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: 54px;">
                </a>
              </th>
            </tr>
          </tbody>
        </table>
      </th>
      <th class="enhance-Footer-linksColumn columns last" style="Margin: 0 auto; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: calc(100%-80px);">
        <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
          <tbody>
            <tr style="padding: 0; text-align: left; vertical-align: top;">
              <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                <p style="Margin: 0; Margin-bottom: 10px; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; hyphens: initial !important; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; padding-left: 8px; text-align: left;">
                  <a href="https://enhancedigital.co.nz/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><strong>enhancedigital</strong>.co.nz</a>
                </p>
                <p style="Margin: 0; Margin-bottom: 10px; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; hyphens: initial !important; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; padding-left: 8px; text-align: left;">
                  <a href="mailto:kelsey@enhancedigital.co.nz" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">kelsey@<strong>enhancedigital</strong>.co.nz</a>
                </p>
              </th>
            </tr>
          </tbody>
        </table>
      </th>

    </tr>
  </tbody>
</table>
${createSpacer('16px')}
`;

const createIntroduction = (title: string, description: string) => `
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
  <tbody>
    <tr style="padding: 0; text-align: left; vertical-align: top;">
      <th style="Margin: 0; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
        <h1 style="Margin: 0; Margin-bottom: 10px; color: #2095f2; font-family: Helvetica, Arial, sans-serif; font-size: 34px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">
          ${title}
        </h1>
        <p class="small-text-left" style="Margin: 0; Margin-bottom: 10px; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: initial !important; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
          ${description}
        </p>
      </th>
    </tr>
  </tbody>
</table>
`;

const createWrapper = (size: string, children: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head></head>
  <body>
    ${createStyles()}
    <table align="left" class="container container--contactForm" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: ${size};">
      <tbody>
        <tr style="padding: 0; text-align: left; vertical-align: top;">
          <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
            <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
              <tbody>
                <tr style="padding: 0; text-align: left; vertical-align: top;">
                  <th class="small-12 large-4 columns first" style="Margin: 0 auto; color: #054374; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 177.33333px;">
                    ${children}
                  </th>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

const createScaffold = (
  children: string,
  title: string,
  description: string,
  size: string = '540px',
) =>
  createWrapper(
    size,
    `
    ${createHeader()}
    ${createIntroduction(title, description)}
    ${createSpacer('32px')}
    ${children}
    ${createFooter()}
  `,
  );

const email = { createScaffold, createSpacer, createDivider };

export { email as default, createScaffold, createSpacer, createDivider };
