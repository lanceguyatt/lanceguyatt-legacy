/* eslint no-var: 0, prefer-template: 0, object-shorthand: 0, func-names: 0,
  import/no-extraneous-dependencies: 0 */
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
  resolve: {
    alias: {
      react: 'react-lite',
      'react-dom': 'react-lite',
    },
  },
  module: {
    rules: [

      {
        test: /\.js$/,
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
};
