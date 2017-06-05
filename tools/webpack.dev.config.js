const webpack = require('webpack');
const path = require('path');

const base = require('./webpack.config');

module.exports = Object.assign({}, base, {

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
        include: [path.resolve(__dirname, '../client')],
        use: 'babel-loader',
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
        test: /\.(png|woff2|eot|mp3|xml|txt|ico|html)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },

    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
