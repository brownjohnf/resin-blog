/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const isDevMode = process.env.NODE_ENV === 'development' ? true : false;

const entries = [ path.join(__dirname,'src/index.js') ];
const plugins = [];

if (isDevMode) {
  // add HMR in dev mode
  entries.push('webpack-hot-middleware/client');
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  // explicitly set context because webpack is often called from parent dir
  context: __dirname,
  entry: entries,
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets/',
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
      { test: /\.css$/, loader:'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ]
  },
  plugins: plugins
};
