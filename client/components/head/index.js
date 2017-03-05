/* eslint-disable import/no-extraneous-dependencies,
import/no-unresolved, import/no-webpack-loader-syntax */
import React from 'react';
import Helmet from 'react-helmet';

import site from '../../../data/site.json';

// const image = require('file-loader?name=[name].[ext]!../../assets/lanceguyatt.png');
// const appleTouchIcon = require('file-loader?name=[name].[ext]!../../assets/apple-touch-icon.png');
// const humans = require('file-loader?name=[name].[ext]!../../assets/humans.txt');
// const favicon = require('file-loader?name=[name].[ext]!../../assets/favicon.ico');
// const favicon32x32 = require('file-loader?name=[name].[ext]!../../assets/favicon-32x32.png');
// const favicon16x16 = require('file-loader?name=[name].[ext]!../../assets/favicon-16x16.png');

const image = require('../../assets/lanceguyatt.png');
const appleTouchIcon = require('../../assets/apple-touch-icon.png');
const favicon32x32 = require('../../assets/favicon-32x32.png');
const favicon16x16 = require('../../assets/favicon-16x16.png');

const humans = require('file-loader?name=[name].[ext]!../../assets/humans.txt');
const favicon = require('file-loader?name=[name].[ext]!../../assets/favicon.ico');


const Head = ({ data }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    defaultTitle={site.name}
    titleTemplate="%s - Lance Guyatt, Web Developer"
    title={data.name}
    meta={[
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: data.name },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: `${site.url}${data.url}` },
      { property: 'og:image', content: `${site.url}${image}` },
      { property: 'og:type', content: 'website' },
      { property: 'fb:app_id', content: site.appId },
      { name: 'apple-mobile-web-app-title', content: 'Lance Guyatt' },
      { name: 'application-name', content: 'Lance Guyatt' },
      { name: 'theme-color', content: '#aaa' },
    ]}
    link={[
      { rel: 'shortcut icon', href: `${favicon}` },
      { rel: 'shortcut icon', href: `${favicon16x16}`, sizes: '16x16' },
      { rel: 'shortcut icon', href: `${favicon32x32}`, sizes: '32x32' },
      { rel: 'apple-touch-icon', href: `${appleTouchIcon}`, sizes: '180x180' },
      { rel: 'author', href: `${humans}`, type: 'text/plain' },
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
