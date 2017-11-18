import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { site } from '../../data';

export default function Head(props) {
  const { data } = props;
  const pageUrl = `${site.url}${data.url}`;
  const pageImage = `${site.url}/logo.png`;
  const pageTitle = `${data.name} - ${site.name}`;

  return (
    <Helmet
      defaultTitle={site.name}
      titleTemplate="%s Lance Guyatt, Web Developer"
      title={pageTitle}
      meta={[
        { name: 'description', content: data.description },
        { property: 'og:site_name', content: site.name },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: data.description },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: pageImage },
        { property: 'og:image:width', content: 1200 },
        { property: 'og:image:height', content: 630 },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@lanceguyatt' },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image:src', content: pageImage },
        { name: 'twitter:url', content: pageUrl },
        { dataprop: 'name', content: pageTitle },
        { dataprop: 'description', content: data.description },
        { dataprop: 'url', content: pageUrl },
      ]}
    />
  );
}

Head.propTypes = {
  data: PropTypes.shape(),
};

Head.defaultProps = {
  data: {},
};
