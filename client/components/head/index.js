import React from 'react';
import Helmet from 'react-helmet';

import SITE from '../../../data/site/index.json';

const Head = ({ page }) => (
  <Helmet
    title={page.name}
    meta={[
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: SITE.url + page.url },
    ]}
    link={[
      { rel: 'shortcut icon', href: require('../../assets/favicon.ico') },
    ]}
  />
);

Head.propTypes = {
  page: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
  }),
};

Head.defaultProps = {
  page: {
    url: SITE.url,
  },
};

export default Head;
