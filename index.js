// # Ghost Startup
const ghost = require('ghost');
const path = require('path');
const express = require('express');
const expressInstance = express();
const helpers = require('./content/helpers');

// init custom helpers
helpers();

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  expressInstance.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(expressInstance);
}).catch(function(err) {
  console.error(err);
});
