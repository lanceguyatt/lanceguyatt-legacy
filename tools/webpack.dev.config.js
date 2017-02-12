/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      './client/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        loaders: [
          'file-loader?name=[path][name].[ext]',
        ],
      },
    ],
  },
};
