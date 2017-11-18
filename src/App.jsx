import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './constants';

import WorkBench from './containers/WorkBench';
import Drawer from './containers/Drawer';
import KickStart from './containers/KickStart';
import GuruMeditation from './containers/GuruMeditation';

import { workbench, kickstart, guruMeditation, projects, work, about } from './data';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={workbench.url} exact render={() => <WorkBench data={workbench} />} />
          <Route path={work.url} exact render={() => <Drawer data={work} />} />
          <Route path={projects.url} exact render={() => <Drawer data={projects} />} />
          <Route path={about.url} exact render={() => <Drawer data={about} />} />
          <Route path={kickstart.url} exact render={() => <KickStart data={kickstart} />} />
          <Route path="*" render={() => <GuruMeditation data={guruMeditation} />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
