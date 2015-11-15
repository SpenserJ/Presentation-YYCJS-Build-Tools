'use strict';
var webpack = require('webpack');

var config = {
  entry: [
    './presentation/entry.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'presentation.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /\.jade$/,
        exclude: /(node_modules)/,
        loaders: ['html', 'jade-html'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
  devtool: 'eval-source-map',
};

module.exports = config;
