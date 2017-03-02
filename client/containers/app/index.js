import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const App = ({ children }) => (
  <div styleName="app">
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default CSSModules(App, styles, { allowMultiple: true });
