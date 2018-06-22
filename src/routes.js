import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/';
import WorkBench from './containers/workbench/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';
import Work from './containers/work/';

import Drawer from './components/drawer/';

import workbench from '../data/workbench/';
import associatedPress from '../data/work/associated_press/';
import awin from '../data/work/awin/';
import bauerMedia from '../data/work/bauer_media/';
import mq from '../data/work/mq/';
import wilsonFletcher from '../data/work/wilson_fletcher/';
import work, { novagraaf } from '../data/work';
import projects from '../data/projects/';
import about from '../data/about/';
import kickstart from '../data/kickstart/';
import guruMeditation from '../data/guru_meditation/';

const routes = (
  <div>
    <Route component={App}>
      <Route path={workbench.url} component={WorkBench} data={workbench}>
        <Route path={work.url} data={work} component={Drawer}>
          <Route
            path={associatedPress.url}
            data={associatedPress}
            component={Work}
          />
          <Route path={novagraaf.url} data={novagraaf} component={Work} />
          <Route path={awin.url} data={awin} component={Work} />
          <Route path={bauerMedia.url} data={bauerMedia} component={Work} />
          <Route path={mq.url} data={mq} component={Work} />
          <Route
            path={wilsonFletcher.url}
            data={wilsonFletcher}
            component={Work}
          />
        </Route>
        <Route path={projects.url} data={projects} component={Drawer} />
        <Route path={about.url} data={about} component={Drawer} />
      </Route>
      <Route path={kickstart.url} data={kickstart} component={KickStart} />
      <Route
        path={guruMeditation.url}
        data={guruMeditation}
        component={GuruMeditation}
        status={404}
      />
      <Route
        path="404"
        component={GuruMeditation}
        data={guruMeditation}
        status={404}
      />
      <Route
        path="*"
        component={GuruMeditation}
        data={guruMeditation}
        status={404}
      />
    </Route>
  </div>
);

export default routes;
