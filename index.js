// # Ghost Startup
var ghost = require('ghost'),
    express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    path = require('path'),
    parentApp = express();

const webpackConfig = require('./content/themes/resin-react/webpack.config');
const compiler = webpack(webpackConfig);

// use hmr api to rebuild assets when /src files change
parentApp.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

// inject files and reload browser
parentApp.use(require("webpack-hot-middleware")(compiler));

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(parentApp);
}).catch(function(err) {
  console.error(err);
});
