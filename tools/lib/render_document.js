/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';

import site from '../../data/site/';
import author from '../../data/author';

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
        <meta itemProp="dateCreated" content={site.dateCreated} />
        <meta itemProp="datePublished" content={site.datePublished} />
        <meta itemProp="dateModified" content={site.dateModified} />
        <meta itemProp="copyrightYear" content={site.copyrightYear} />
        <div itemProp="author" itemScope itemType="http://schema.org/Person">
          <div itemProp="name">
            <meta itemProp="givenName" content={author.name.givenName} />
            <meta itemProp="familyName" content={author.name.familyName} />
          </div>
          <meta itemProp="description" content={author.description} />
          <meta itemProp="url" content={author.url} />
          <meta itemProp="jobTitle" content={author.jobTitle} />
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content={author.address.addressLocality} />
            <meta itemProp="addressCountry" content={author.address.addressCountry} />
          </div>
        </div>
      </body>
    </html>
  );

  Html.propTypes = {
    title: PropTypes.node,
    metas: PropTypes.node,
    links: PropTypes.node,
    scripts: PropTypes.node,
    cssBundle: PropTypes.string,
    jsBundle: PropTypes.string,
    body: PropTypes.string,
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
