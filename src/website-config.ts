export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Jasons Brews',
  description: 'Beer stuff.',
  coverImage: 'img/hb-cover.png',
  logo: 'img/HopShot-Logo',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  facebook: 'https://www.facebook.com/ghost',
  twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction:
    'https://gmail.us20.list-manage.com/subscribe/post?u=4bc1a5d52218e76c96ba20d15&amp;id=009c8ff4fc',
  mailchimpName: 'u_4bc1a5d52218e76c96ba20d15_009c8ff4fc',
};

export default config;
