import React from 'react';
import Helmet from 'react-helmet';

import SITE from '../../../data/site/index.json';

const Head = ({ data }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    defaultTitle={SITE.name}
    titleTemplate="%s - Lance Guyatt"
    title={data.name}
    meta={[
      { name: 'description', content: data.description },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:title', content: data.name },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: `${SITE.url}${data.url}` },
      { property: 'og:image', content: data.image ? `${SITE.url}${data.image}` : `${SITE.url}${SITE.image}` },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1' },
      { name: 'apple-mobile-web-app-title', content: 'Lance Guyatt' },
    ]}
    link={[
      { rel: 'shortcut icon', href: require('../../assets/favicon.ico') },
      { rel: 'apple-touch-icon', href: require('../../assets/apple-touch-icon.png'), sizes: '180x180' },
      { rel: 'author', href: '/humans.txt', type: 'text/plain' },
    ]}
  />
);

Head.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    image: React.PropTypes.string,
  }),
};

Head.defaultProps = {
  data: {
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}logo.png`,
  },
};

export default Head;
