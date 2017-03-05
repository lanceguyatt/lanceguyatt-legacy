import React from 'react';

import styles from './style.css';

const Titlebar = ({ name, isWindow }) => (
  <div className={isWindow ? styles.titlebarWindow : styles.titlebarDefault}>{name}</div>
);

Titlebar.propTypes = {
  name: React.PropTypes.string,
  isWindow: React.PropTypes.bool,
};

Titlebar.defaultProps = {
  name: 'Name here',
  isWindow: false,
};

export default Titlebar;
