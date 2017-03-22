/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var stylelint = require("stylelint");
// Plugin that extracts and keeps track of the real paths to the assets,
// saved within webpack-assets.json
// Reason is to have Wepback's require() like behaviour when requiring
// images etc. within Node when the static site is being rendered.
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.prod.config'));

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: ['./client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'scripts/[name]-[hash].js',
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
        include: [path.resolve(__dirname, '../client')],
        use: 'babel-loader',
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('css'),
        use: ExtractTextPlugin.extract({
          fallback: [
            {
              loader: 'style-loader',
            },
          ],
          use: [
            {
              loader: 'css-loader',
              options: {
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
                minimize: true,
                modules: true,
              },
            }, {
              loader: 'postcss-loader',
            },
          ],
        }),
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('icons'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000,
            },
          },
        ],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('audio'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'audio/[name].[ext]',
            },
          },
        ],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('static'),
        include: [path.resolve(__dirname, '../client/static')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //   screw_ie8: true,
    //   compressor: {
    //     warnings: false,
    //   },
    // }),

    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false,
      },
    }),

    new webpack.optimize.AggressiveMergingPlugin(),

    new ExtractTextPlugin({
      filename: 'styles/bundle-[contenthash].css',
      allChunks: true,
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new CopyWebpackPlugin([
      { from: './client/static/manifest.json', to: './' },
    ]),

    webpackIsomorphicToolsPlugin,
  ],
};
