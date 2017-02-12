/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var stylelint = require("stylelint");
// Plugin that extracts and keeps track of the real paths to the assets,
// saved within webpack-assets.json
// Reason is to have Wepback's require() like behaviour when requiring
// images etc. within Node when the static site is being rendered.
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.prod.config.js'));

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: ['./client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[hash].js',
    libraryTarget: 'umd',
    publicPath: '',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      compressor: { warnings: false },
    }),

    new ExtractTextPlugin({
      filename: 'bundle-[contenthash].css',
      allChunks: true,
    }),

    webpackIsomorphicToolsPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('css'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[sha512:hash:base64:7].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optimizationLevel: 7,
              progressive: true,
            },
          },
        ],
      },
    ],
  },
};
