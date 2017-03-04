import React from 'react';

import styles from './style.css';

const Titlebar = ({ titlebar, isWindow }) => (
  <div className={isWindow ? styles.titlebarWindow : styles.titlebarDefault}>{titlebar}</div>
);

Titlebar.propTypes = {
  titlebar: React.PropTypes.string,
  isWindow: React.PropTypes.bool,
};

Titlebar.defaultProps = {
  titlebar: 'Name here',
  isWindow: false,
};

export default Titlebar;
