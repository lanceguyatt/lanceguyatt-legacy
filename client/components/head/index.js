import React from 'react';
import Helmet from 'react-helmet';

import SITE from '../../../data/site/index.json';

const Head = ({ data }) => (
  <Helmet
    title={data.name}
    meta={[
      { property: 'og:description', content: data.description },
      {
        property: 'og:url',
        content: `${SITE.url}${data.url}`,
      }, {
        property: 'og:image',
        content: data.image ? `${SITE.url}${data.image}` : `${SITE.url}${SITE.image}`,
      },
    ]}
    link={[
      { rel: 'shortcut icon', href: require('../../assets/favicon.ico') },
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
