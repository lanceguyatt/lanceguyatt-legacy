import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { site } from '../data';

const Head = ({ item }) => {
  const pageUrl = `${site.url}${item.url}`;
  const pageImage = `${site.url}/logo.png`;
  const pageTitle = `${item.name} - ${site.name}`;

  return (
    <Helmet
      defaultTitle={site.name}
      titleTemplate="%s Lance Guyatt, Web Developer"
      title={item.name}
      meta={[
        { name: 'description', content: item.description },
        { property: 'og:site_name', content: site.name },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: item.description },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: pageImage },
        { property: 'og:image:width', content: 1200 },
        { property: 'og:image:height', content: 630 },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@lanceguyatt' },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: item.description },
        { name: 'twitter:image:src', content: pageImage },
        { name: 'twitter:url', content: pageUrl },
        { itemprop: 'name', content: pageTitle },
        { itemprop: 'description', content: item.description },
        { itemprop: 'url', content: pageUrl }
      ]}
    />
  );
};

Head.propTypes = {
  item: PropTypes.shape()
};

Head.defaultProps = {
  item: {}
};

export default Head;
