var App = require('ghost-app'),
    MixpanelApp;

// we can not access to the config here, so we need to hard-code mixpanel keys here
var MIXPANEL_TOKENS = {
  development: 'cb974f32bab01ecc1171937026774b18',
  production: '99eec53325d4f45dd0633abd719e3ff1',
};

function getMixpanelToken() {
  return MIXPANEL_TOKENS[process.env.NODE_ENV] || MIXPANEL_TOKENS['development']
}

MixpanelApp = App.extend({
    filters: {
       ghost_foot: [9, 'handleGhostFoot']
    },
    handleGhostFoot: function (ghost_foot) {
      ghost_foot.push('<script type="text/javascript">window.mixpanelToken = "' + getMixpanelToken() + '";</script>');
      ghost_foot.push('<script src="/assets/js/mixpanel.js"></script>');

      return ghost_foot;
    }
});

module.exports = MixpanelApp;
