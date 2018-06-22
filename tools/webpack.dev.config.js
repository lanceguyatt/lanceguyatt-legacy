const webpack = require('webpack');
const { resolve } = require('path');

const base = require('./webpack.config');

module.exports = Object.assign({}, base, {

  devtool: 'eval-source-map',

  entry: {
    bundle: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      './src/index.js',
    ],
  },

  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        include: [resolve(__dirname, '../src')],
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        include: [resolve(__dirname, '../src')],
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
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../static'),
        ],
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
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../static'),
        ],
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
