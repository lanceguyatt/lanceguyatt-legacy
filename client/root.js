/* eslint-disable no-undef */
// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import ReactGA from 'react-ga';
import routes from './routes';

import './assets/myopenid-hosted-verification.html';
import './assets/browserconfig.xml';
import './assets/crossdomain.xml';
import './assets/android-chrome-192x192.png';
import './assets/android-chrome-512x512.png';

ReactGA.initialize('UA-19641705-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const Root = () => (
  <Router
    routes={routes}
    history={browserHistory}
    onUpdate={logPageView}
    render={applyRouterMiddleware(useScroll())}
  />
);

export default Root;
