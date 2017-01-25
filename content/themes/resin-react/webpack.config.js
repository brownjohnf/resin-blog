const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    path: __dirname + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      containers: path.join(__dirname, '/src/containers'),
      components: path.join(__dirname, '/src/components'),
      css: path.join(__dirname, '/src/static/css'),
      settings: path.join(__dirname, '/src/settings')
    }
  },
  postcss: [
    require('autoprefixer')
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader:'style-loader!css-loader?modules!postcss-loader' },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: plugins
};
