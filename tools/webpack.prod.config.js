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

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: ['./client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[hash].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('css'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: '/',
                modules: true,
                import: true,
                url: true,
                minimize: true,
                sourceMap: false,
                camelCase: false,
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
              },
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
              },
            },
          ],
        }),
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
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[sha512:hash:base64:7].[ext]',
            },
          }, {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },

      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          // options: {
          //   name: 'audio/[hash].[ext]',
          // },
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
};
