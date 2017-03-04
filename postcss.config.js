/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    require('postcss-custom-properties'),
    require('postcss-color-function'),
    require('postcss-custom-selectors'),
    require('postcss-media-minmax'),
    require('autoprefixer', {
      remove: false,
    }),
  ],
};
