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

      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {},
      //     },
      //   ],
      // },

      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[path]/[name].[ext]',
            },
          },
        ],
      },

      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'audio/[hash].[ext]',
          },
        },
      },

      {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 50000,
          mimetype: 'application/font-woff',
        },
      },
    ],
  },
};
