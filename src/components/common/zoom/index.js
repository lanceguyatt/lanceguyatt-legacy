import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export function Zoom(props) {
  return (
    <button className={styles.zoom} onClick={props.action}>
      Zoom
    </button>
  );
}

Zoom.propTypes = {
  action: PropTypes.func,
};

Zoom.defaultProps = {
  action: null,
};
