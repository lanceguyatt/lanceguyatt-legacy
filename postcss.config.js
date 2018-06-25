const postCSSCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    postCSSCustomProperties({
      strict: false,
      preserve: false,
      warnings: true,
    }),
    require('postcss-custom-selectors'),
    require('autoprefixer'),
  ],
};
