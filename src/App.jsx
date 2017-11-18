import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './constants';

import WorkBench from './containers/WorkBench';
import KickStart from './containers/KickStart';
import GuruMeditation from './containers/GuruMeditation';

import { workbench, kickstart, guruMeditation } from './data';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            path={workbench.url}
            exact
            render={() => <WorkBench data={workbench} />}
          />
          <Route
            path={kickstart.url}
            exact
            render={() => <KickStart data={kickstart} />}
          />
          <Route
            path="*"
            render={() => <GuruMeditation data={guruMeditation} />}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
