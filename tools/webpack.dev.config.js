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
  module: {
    rules: [

      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
            options: {},
          },
        ],
      },

      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },

      {
        test: /\.(png|jpg|gif|ico|svg|mp3|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },

      // {
      //   test: /\.mp3$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {},
      //   },
      // },
      //
      // {
      //   test: /\.woff2$/,
      //   loader: 'file-loader',
      //   options: {},
      // },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
