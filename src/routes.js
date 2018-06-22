import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import WorkBench from './containers/Workbench';
import KickStart from './containers/Kickstart';
import GuruMeditation from './containers/GuruMeditation';
import Work from './containers/Work';

import Drawer from './components/Drawer';

import workbench from '../data/workbench';
import work, {
  ap,
  awin,
  bauerMedia,
  mq,
  novagraaf,
  wilsonFletcher,
} from '../data/work';
import projects from '../data/projects';
import about from '../data/about';
import kickstart from '../data/kickstart';
import guruMeditation from '../data/guru-meditation';

const routes = (
  <div>
    <Route component={App}>
      <Route path={workbench.url} component={WorkBench} data={workbench}>
        <Route path={work.url} data={work} component={Drawer}>
          <Route path={ap.url} data={ap} component={Work} />
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
