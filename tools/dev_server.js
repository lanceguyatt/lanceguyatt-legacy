/* eslint no-console: 1 */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddlware from 'webpack-hot-middleware';

import renderDocument from './lib/render_document';
import webpackConfig from './webpack.dev.config';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddlware(compiler));

app.get('*', (req, res) => {
  const html = renderDocument({
    bundle: `${webpackConfig.output.publicPath}bundle.js`,
  });

  res.send(html);
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', (error) => {
  if (error) return console.error(error);
  return console.log(`Dev server listening at http://0.0.0.0:${port}`);
});
