// # Ghost Startup
const ghost = require('ghost');
const path = require('path');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
}).catch(function(err) {
  console.error(err);
});
