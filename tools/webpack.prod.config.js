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
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.prod.config'));

// const vendorLibraries = [
//   'react',
//   'react-router',
//   'react-dom',
// ];

module.exports = {
  devtool: false,
  entry: {
    bundle: './client/index.js',
    // vendor: vendorLibraries,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[hash].js',
    // libraryTarget: 'umd',
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
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: 'images/[hash].[ext]',
        },
      },

      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
        },
      },

      // {
      //   test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      //   use: [
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //         },
      //         optipng: {
      //           optimizationLevel: 7,
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4,
      //         },
      //         svgo: {
      //           plugins: [
      //             {
      //               removeViewBox: false,
      //             }, {
      //               removeEmptyAttrs: false,
      //             },
      //           ],
      //         },
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.woff2$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },

    ],
  },
  plugins: [

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    // }),

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
      filename: 'styles/bundle-[contenthash].css',
      allChunks: true,
    }),

    webpackIsomorphicToolsPlugin,
  ],
};
