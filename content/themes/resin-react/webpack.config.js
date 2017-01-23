var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
  'webpack-hot-middleware/client?timeout=2000&overlay=false',
  path.join(__dirname,'src/index.js')
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:2368/assets/js'
  },
  resolve: {
    alias: {
      containers: path.join(__dirname, '/src/containers'),
      components: path.join(__dirname, '/src/components')
    }
  },
  resolveLoader: {
    /*
    manually resolve loaders because when running webpack from other cwd they are not found.
    */
    root: [
      path.resolve(__dirname, './node_modules')
    ]
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
