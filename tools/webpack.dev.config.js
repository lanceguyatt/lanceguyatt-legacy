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
    libraryTarget: 'umd',
    publicPath: '/',
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[local]-[hash:base64:5]',
              modules: true,
            },
          }, {
            loader: 'postcss-loader',
          },
        ],
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
            },
          },
        ],
      },

      {
        test: /\.(png|woff2|eot|mp3)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
