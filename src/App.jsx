import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './constants/theme';

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
            render={() => <WorkBench item={workbench} />}
          />
          <Route
            path={kickstart.url}
            exact
            render={() => <KickStart item={kickstart} />}
          />
          <Route
            path={'*'}
            render={() => <GuruMeditation item={guruMeditation} />}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
