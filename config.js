const { resolve } = require('path');

const srcDir = resolve(__dirname, 'client');
const destDir = resolve(__dirname, 'build');

module.exports = {
  paths: {
    srcDir,
    destDir,
    styles: {
      srcDir: resolve(srcDir, 'styles'),
      destDir: resolve(destDir, 'styles'),
    },
    images: {
      srcDir: resolve(srcDir, 'images'),
      destDir: resolve(destDir, 'images'),
    },
    scripts: {
      srcDir: resolve(srcDir, 'scripts'),
      destDir: resolve(destDir, 'scripts'),
    },
  },
};
