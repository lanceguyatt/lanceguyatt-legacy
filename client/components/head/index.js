import React from 'react';
import Helmet from 'react-helmet';

import site from '../../../data/site.json';
import image from '../../assets/logo.png';

const Head = ({ data }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    defaultTitle={site.name}
    titleTemplate="%s - Lance Guyatt, Web Developer"
    title={data.name}
    meta={[
      { name: 'description', content: data.description },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: data.name },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: `${site.url}${data.url}` },
      { property: 'og:image', content: `${site.url}${image}` },
      { name: 'apple-mobile-web-app-title', content: 'Lance Guyatt' },
    ]}
    link={[
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
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}logo.png`,
  },
};

export default Head;
