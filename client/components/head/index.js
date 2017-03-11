/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';

import site from '../../../data/site.json';
import author from '../../../data/author.json';

import logo from '../../static/logo.png';
import appleTouchIcon from '../../static/apple-touch-icon.png';
import favicon32x32 from '../../static/favicon-32x32.png';
import favicon16x16 from '../../static/favicon-16x16.png';

import humans from '../../static/humans.txt';

import favicon from '../../static/favicon.ico';

import '../../static/android-chrome-192x192.png';
import '../../static/android-chrome-512x512.png';

import '../../static/robots.txt';

import '../../static/myopenid-hosted-verification.html';

import '../../static/browserconfig.xml';
import '../../static/crossdomain.xml';

const authorName = `${author.name.givenName} ${author.name.familyName}`;

const Head = ({ data }) => {
  const pageUrl = `${site.url}${data.url}`;
  const pageImage = `${site.url}${logo}`;
  const pageTitle = `${data.name} - ${site.name}`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
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
        { property: 'og:type', content: 'website' },
        { property: 'fb:app_id', content: site.appId },
        { property: 'fb:admins', content: '781041907' },
        { name: 'twitter:site', content: author.twitter },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image:src', content: pageImage },
        { name: 'twitter:url', content: pageUrl },
        { name: 'apple-mobile-web-app-title', content: authorName },
        { name: 'application-name', content: authorName },
        { name: 'theme-color', content: site.themeColor },
        { name: 'google-site-verification', content: site.googleSiteVerification},
      ]}
      link={[
        { rel: 'shortcut icon', href: favicon },
        { rel: 'shortcut icon', href: favicon16x16, sizes: '16x16' },
        { rel: 'shortcut icon', href: favicon32x32, sizes: '32x32' },
        { rel: 'apple-touch-icon', href: appleTouchIcon, sizes: '180x180' },
        { rel: 'author', href: humans, type: 'text/plain' },
        { rel: 'canonical', href: pageUrl },
      ]}
    />
  );
};

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
