import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/';
import WorkBench from './containers/workbench/';
import GuruMeditation from './containers/guru_meditation';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={WorkBench} />
    <Route path="*" component={GuruMeditation} />
  </Route>
);

export default routes;
