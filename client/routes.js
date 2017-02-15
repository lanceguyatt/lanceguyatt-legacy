import React from 'react';
import { Route } from 'react-router';
// import Layout from './components/layout/';
import WorkBench from './containers/workbench/';
import Work from './containers/work/';
import WorkItem from './components/work_item/';
// import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation';

const routes = (
  <div>
    <Route component={WorkBench}>
      <Route path="/work" component={Work}>
        <Route path="/work/1" component={WorkItem} />
      </Route>
    </Route>
    <Route path="*" component={GuruMeditation} />
  </div>
);

export default routes;
