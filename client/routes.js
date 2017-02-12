import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/';
import Hello from './components/hello/';
import GuruMeditation from './components/guru_meditation';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Hello} />
    <Route path="*" component={GuruMeditation} />
  </Route>
);

export default routes;
