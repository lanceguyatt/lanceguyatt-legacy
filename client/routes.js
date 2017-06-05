import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/';
import WorkBench from './containers/workbench/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';
import Drawer from './components/drawer/';
import Work from './components/work/';

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
      <Route path={workbench.url} component={WorkBench} data={workbench}>
        <Route path={work.url} component={Drawer} data={work}>
          <Route path={associatedPress.url} data={associatedPress} component={Work} />
          <Route path={awin.url} data={awin} component={Work} />
          <Route path={mq.url} data={mq} component={Work} />
          <Route path={wilsonFletcher.url} data={wilsonFletcher} component={Work} />
          <Route path={bauerMedia.url} data={bauerMedia} component={Work} />
        </Route>
        <Route path={projects.url} data={projects} component={Drawer} />
        <Route path={about.url} data={about} component={Drawer} />
      </Route>
      <Route path={kickstart.url} data={kickstart} component={KickStart} />
      <Route
        path={guruMeditation.url}
        data={guruMeditation}
        status={404}
        component={GuruMeditation}
      />
      <Route path="404" component={GuruMeditation} status={404} data={guruMeditation} />
      <Route path="*" component={GuruMeditation} status={404} data={guruMeditation} />
    </Route>
  </div>
);

export default routes;
