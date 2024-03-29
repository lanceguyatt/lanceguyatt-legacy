import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic.prod.config';

const projectBasePath = path.resolve(__dirname, '..');

// run the build_static script with Wepback's require() like behaviour
// when requiring images etc.
const webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .server(projectBasePath, () => {
    const { javascript, styles } = webpackIsomorphicTools.assets();
    const buildStatic = require('./build_static.js').default;

    buildStatic({
      jsBundle: javascript.bundle,
      cssBundle: styles.bundle,
    });
  });
