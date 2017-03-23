import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/';
import Home from './containers/home/';
import Start from './containers/start/';

const routes = (
  <div>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/signup/start" component={Start} />
    </Route>
  </div>
);

export default routes;
