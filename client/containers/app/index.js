import React, { PropTypes } from 'react';

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
