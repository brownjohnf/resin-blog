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
      ga: process.env.GA_TOKEN,
      mixpanel: process.env.MIXPANEL_TOKEN,
      // gosquared
      _gs: process.env.GS_TOKEN
    }

    return analytics[service];
  });
}
