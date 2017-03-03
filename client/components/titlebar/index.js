import React from 'react';

import styles from './style.css';

const Titlebar = ({ children, isWindow }) => (
  <div className={isWindow ? styles.titlebarWindow : styles.titlebarDefault}>
    {children}
  </div>
);

Titlebar.propTypes = {
  children: React.PropTypes.node,
  isWindow: React.PropTypes.bool,
};

export default Titlebar;
