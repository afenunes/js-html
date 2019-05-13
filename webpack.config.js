const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    filename: './_build/bundle.js',
    path: path.resolve(__dirname),
    library: 'jsHtml',
    libraryTarget: 'var',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ],
  },
};
