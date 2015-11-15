'use strict';

var path = require('path');
var webpack = require('webpack');

var deps = [
  'reveal',
  'highlight.js',
];

var config = {
  entry: {
    app: [
      './presentation/entry.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client',
    ],
    vendor: [],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'presentation.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
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

deps.forEach(function (dep) {
  var depName = dep.split(path.sep)[0];
  config.entry.vendor.push(depName);
});

module.exports = config;
