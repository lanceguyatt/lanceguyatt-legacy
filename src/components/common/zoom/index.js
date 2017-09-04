import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Zoom = ({ action }) => (
  <button className={styles.zoom} onClick={action}>Zoom</button>
);

Zoom.propTypes = {
  action: PropTypes.func,
};

Zoom.defaultProps = {
  action: null,
};

export default Zoom;
