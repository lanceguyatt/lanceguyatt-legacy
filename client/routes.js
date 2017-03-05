import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/';
import WorkBench from './containers/workbench/';
import Drawer from './components/drawer/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';

import workbench from '../data/workbench.json';
import work from '../data/work.json';
import about from '../data/about.json';
import kickstart from '../data/kickstart.json';
import guruMeditation from '../data/guru_meditation.json';

const routes = (
  <div>
    <Route component={App}>
      <Route path="/" component={WorkBench} data={workbench}>
        <Route path="/work/" component={Drawer} data={work} />
        <Route path="/about/" component={Drawer} data={about} />
      </Route>
      <Route path="/kickstart/" component={KickStart} data={kickstart} />
      <Route path="*" component={GuruMeditation} status={404} data={guruMeditation} />
      <Route path="404" component={GuruMeditation} status={404} data={guruMeditation} />
    </Route>
  </div>
);

export default routes;
