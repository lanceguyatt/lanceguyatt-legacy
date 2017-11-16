import React from 'react';
import { render } from 'react-snapshot';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/global';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}

registerServiceWorker();
