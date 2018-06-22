import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import site from '../../../data/site/';
import author from '../../../data/author/';

import logo from '../../static/share.png';
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

import '../../static/myopenid-hosted-verification.html';

import browserConfig from '../../static/browserconfig.xml';
import '../../static/crossdomain.xml';
import '../../static/loadtestertool.xml';

const appTitle = `${author.name.givenName} ${author.name.familyName}`;

const Head = ({ data }) => {
  const pageUrl = `${site.url}${data.url}`;
  const pageImage = `${site.url}${logo}`;
  const pageTitle = `${data.name} - ${site.name}`;

  return (
    <Helmet
      defaultTitle={site.name}
      titleTemplate="%s - Lance Guyatt, Web Developer"
      title={data.name}
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
        { property: 'fb:app_id', content: site.fbAppId },
        { property: 'fb:admins', content: site.fbAdmins },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: author.twitter.name },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image:src', content: pageImage },
        { name: 'twitter:url', content: pageUrl },
        { itemprop: 'name', content: pageTitle },
        { itemprop: 'description', content: data.description },
        { itemprop: 'url', content: pageUrl },
        { name: 'apple-mobile-web-app-title', content: appTitle },
        { name: 'msapplication-config', content: browserConfig },
        { name: 'application-name', content: appTitle },
        { name: 'theme-color', content: site.themeColor },
        {
          name: 'google-site-verification',
          content: site.googleSiteVerification,
        },
        { name: 'msvalidate.01', content: site.msValidate },
      ]}
      link={[
        { rel: 'shortcut icon', href: favicon },
        { rel: 'shortcut icon', href: favicon16x16, sizes: '16x16' },
        { rel: 'shortcut icon', href: favicon32x32, sizes: '32x32' },
        { rel: 'apple-touch-icon', href: appleTouchIcon, sizes: '180x180' },
        { rel: 'manifest', href: '/manifest.json' },
        /* { rel: 'mask-icon', href: safariPinnedTab, color: site.themeColor }, */
        { rel: 'author', href: humans, type: 'text/plain' },
        { rel: 'canonical', href: pageUrl },
      ]}
    />
  );
};

Head.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.object,
  }),
};

Head.defaultProps = {
  data: {
    name: site.name,
    description: site.description,
    url: '',
    image: `${site.url}logo.png`,
  },
};

export default Head;
