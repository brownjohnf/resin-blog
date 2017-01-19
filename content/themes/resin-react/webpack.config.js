var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname + '/assets/js', filename: 'bundle.js' },
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
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
