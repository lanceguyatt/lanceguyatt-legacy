/* eslint-disable no-undef */
import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import useScroll from 'react-router-scroll/lib/useScroll';
import ReactGA from 'react-ga';
import routes from './routes';

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
