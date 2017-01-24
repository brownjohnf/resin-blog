const path = require('path');
const webpack = require('webpack');
const isDevMode = process.env.NODE_ENV === 'development' ? true : false;

const entries = [ path.join(__dirname,'src/index.js') ];
const plugins = [];

if (isDevMode) {
  // add HMR in dev mode
  entries.push('webpack-hot-middleware/client?timeout=2000&overlay=false');
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  // explicitly set context because webpack is often called from parent dir
  context: __dirname,
  entry: entries,
  output: {
    path: '/assets',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      containers: path.join(__dirname, '/src/containers'),
      components: path.join(__dirname, '/src/components')
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: "json" }
    ]
  },
  plugins: plugins
};
