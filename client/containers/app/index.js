import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const App = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: '',
};

export default App;
