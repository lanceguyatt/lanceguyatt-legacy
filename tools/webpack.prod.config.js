const webpack = require('webpack');
const { resolve } = require('path');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isomorphicProdConfig = require('./isomorphic.prod.config');
const webpackBase = require('./webpack.config');

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(isomorphicProdConfig);

module.exports = Object.assign({}, webpackBase, {

  entry: {
    bundle: [
      './src/index.js',
    ],
  },

  output: {
    path: resolve(__dirname, '../build'),
    filename: 'assets/scripts/[name]-[hash].js',
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
        include: [resolve(__dirname, '../src')],
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
              name: 'assets/audio/[name].[ext]',
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
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },

      {
        test: webpackIsomorphicToolsPlugin.regular_expression('static'),
        include: [resolve(__dirname, '../static')],
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
              name: 'assets/images/[name].[ext]',
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
      filename: 'assets/styles/bundle-[contenthash].css',
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
      {
        from: './static/manifest.json',
        to: './',
      },
    ]),

    webpackIsomorphicToolsPlugin,
  ],
});
