/* eslint-disable import/no-extraneous-dependencies, global-require, no-undef */
import 'react-fastclick';
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('react-root');

let render = () => {
  const Root = require('./root.js').default;

  ReactDOM.render(
    <Root />,
    rootEl,
  );
};

// manually rerender on hot reloads and show errors in development.
if (module.hot) {
  const renderApp = render;

  const renderError = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./root.js', () => {
    render();
  });
}

render();
