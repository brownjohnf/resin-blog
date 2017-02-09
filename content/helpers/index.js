var hbs = require('express-hbs');
const url = require('url');

module.exports = function() {
  hbs.registerHelper('host', function (u) {
    // rm path from any aboslute url
    // use to get resin home url
    urlObj = url.parse(u);
    return `${urlObj.protocol}//${urlObj.host}`;
  });
  hbs.registerHelper('getToken', function (service) {
    const analytics = {
      // google analytics
      ga: {
        development: process.env.GA_TOKEN,
        production: process.env.GA_TOKEN  || 'UA-45671959-1'
      },
      mixpanel: {
        development: process.env.MIXPANEL_TOKEN || 'cb974f32bab01ecc1171937026774b18',
        production: process.env.MIXPANEL_TOKEN || '99eec53325d4f45dd0633abd719e3ff1',
      },
      // gosquared
      _gs: {
        development: process.env.MIXPANEL_TOKEN,
        production: process.env.MIXPANEL_TOKEN || 'GSN-831588-U',
      }
    }

    return analytics[service][process.env.NODE_ENV];
  });
}
