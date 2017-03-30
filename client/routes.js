import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/';
import WorkBench from './containers/workbench/';
import Drawer from './components/drawer/';
import Work from './components/work/';

import KickStart from './containers/kickstart/';

import GuruMeditation from './containers/guru_meditation/';

import workbench from '../data/workbench/';

import work from '../data/work/';
import associatedPress from '../data/work/associated_press/';
import awin from '../data/work/awin/';
import mq from '../data/work/mq/';
import wilsonFletcher from '../data/work/wilson_fletcher/';
import bauerMedia from '../data/work/bauer_media/';

import projects from '../data/projects/';

import about from '../data/about/';

import kickstart from '../data/kickstart/';

import guruMeditation from '../data/guru_meditation/';

const routes = (
  <div>
    <Route component={App}>
      <Route path="/" component={WorkBench} data={workbench}>
        <Route path="/work/" component={Drawer} data={work}>
          <Route path="/work/associated-press/" component={Work} data={associatedPress} />
          <Route path="/work/awin/" component={Work} data={awin} />
          <Route path="/work/mq/" component={Work} data={mq} />
          <Route path="/work/wilson-fletcher/" component={Work} data={wilsonFletcher} />
          <Route path="/work/bauer-media/" component={Work} data={bauerMedia} />
        </Route>
        <Route path="/projects/" component={Drawer} data={projects} />
        <Route path="/about/" component={Drawer} data={about} />
      </Route>
      <Route path="/kickstart/" component={KickStart} data={kickstart} />
      <Route path="/guru-meditation/" component={GuruMeditation} status={404} data={guruMeditation} />
      <Route path="404" component={GuruMeditation} status={404} data={guruMeditation} />
      <Route path="*" component={GuruMeditation} status={404} data={guruMeditation} />
    </Route>
  </div>
);

export default routes;
