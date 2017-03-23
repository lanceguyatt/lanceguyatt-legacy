import React from 'react';
import Helmet from 'react-helmet';

import site from '../../../data/site/';
// import author from '../../../data/author/';

// import logo from '../../static/share.png';
import appleTouchIcon from '../../static/apple-touch-icon.png';
import favicon32x32 from '../../static/favicon-32x32.png';
import favicon16x16 from '../../static/favicon-16x16.png';

import humans from '../../static/humans.txt';

import favicon from '../../static/favicon.ico';

import '../../static/android-chrome-192x192.png';
import '../../static/android-chrome-512x512.png';

// import safariPinnedTab from '../../static/safari-pinned-tab.svg';
// import manifest from '../../static/manifest.json';

import '../../static/robots.txt';

// import browserConfig from '../../static/browserconfig.xml';
// const authorName = `${author.name.givenName} ${author.name.familyName}`;

const Head = ({ view }) => (
  <Helmet
    htmlAttributes
    defaultTitle={site.name}
    title={view.name}
    meta={[
      { name: 'description', content: site.description },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: view.name },
      { property: 'og:description', content: site.description },
    ]}

    link={[
      { rel: 'shortcut icon', href: favicon },
      { rel: 'shortcut icon', href: favicon16x16, sizes: '16x16' },
      { rel: 'shortcut icon', href: favicon32x32, sizes: '32x32' },
      { rel: 'apple-touch-icon', href: appleTouchIcon, sizes: '180x180' },
      { rel: 'author', href: humans, type: 'text/plain' },
    ]}
  />
);

Head.propTypes = {
  view: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};

Head.defaultProps = {
  view: {
    name: site.name,
  },
};

export default Head;
