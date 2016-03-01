'use strict';

var path = require('path');

var fs = require('fs');

var _ = require('lodash');

var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash' // let me use lodash as ejs engine (ejs-loader requirement)
    })
  ],
  module: {
    loaders: [
      { test: /\.ejs$/, loader: 'ejs-loader' },
      { test: /jquery\.js$/, loader: 'expose?jQuery' },
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules|vendor/}
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'vendor'
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname + '/../../.eslintrc')
  }
};
