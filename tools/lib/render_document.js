/* eslint react/no-danger: 0 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import site from '../../data/site/';

/**
 * Render an html document from a template.
 * @param  {Object} props
 * @return {String}
 */
const renderDocument = (props) => {
  const Html = ({
    title = [<title key={1}>{site.name}</title>],
    metas = [],
    links = [],
    scripts,
    cssBundle,
    jsBundle = '/bundle.js',
    body = '',
  }) => (
    <html lang={site.lang} itemScope itemType="http://schema.org/WebPage">
      <head>
        <meta charSet="utf-8" />
        {title}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {metas}
        {links}
        {scripts}
        {cssBundle && <link rel="stylesheet" href={cssBundle} />}
        { /* <link rel="manifest" href="/manifest.json" /> */ }
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={jsBundle} />
      </body>
    </html>
  );

  Html.propTypes = {
    title: React.PropTypes.node,
    metas: React.PropTypes.node,
    links: React.PropTypes.node,
    scripts: React.PropTypes.node,
    cssBundle: React.PropTypes.string,
    jsBundle: React.PropTypes.string,
    body: React.PropTypes.string,
  };

  // Html.defaultProps = {
  //   Title: '',
  //   metas: '',
  //   links: '',
  //   scripts: '',
  //   cssBundle: '',
  //   jsBundle: '',
  //   body: '',
  // };

  return `<!DOCTYPE html>${renderToStaticMarkup(<Html {...props} />)}`;
};

export default renderDocument;
