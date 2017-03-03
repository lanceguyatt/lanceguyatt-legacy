import React from 'react';

import styles from './style.css';

const App = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
