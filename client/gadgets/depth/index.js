import React from 'react';

import styles from './style.css';

const Depth = ({ action }) => (
  <button className={styles.depth} onClick={action}>Zoom</button>
);

Depth.propTypes = {
  action: React.PropTypes.func,
};

Depth.defaultProps = {
  action: null,
};

export default Depth;
