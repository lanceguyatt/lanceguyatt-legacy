module.exports = (config) => {
  config.set({
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
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
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
