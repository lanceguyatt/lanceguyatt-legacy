import React, { PropTypes } from 'react';

import styles from './style.css';

const Titlebar = ({ name, alternateHeadline, isWindow }) => {
  const title = name !== '' ? name : alternateHeadline;
  return (
    <div className={isWindow ? styles.titlebarWindow : styles.titlebarDefault}>{title}</div>
  );
};

Titlebar.propTypes = {
  name: PropTypes.string,
  alternateHeadline: PropTypes.string,
  isWindow: PropTypes.bool,
};

Titlebar.defaultProps = {
  name: '',
  alternateHeadline: '',
  isWindow: false,
};

export default Titlebar;
