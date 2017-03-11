module.exports = (config) => {
  config.set({
    // basePath: '../',
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      {
        pattern: 'tests.webpack.js',
        watched: false,
      },
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
