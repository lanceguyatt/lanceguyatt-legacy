import React from 'react';

import styles from './style.css';

const Depth = ({ handleClick }) => (
  <button className={styles.depth} onClick={handleClick}>Depth</button>
);

Depth.propTypes = {
  handleClick: React.PropTypes.func,
};

Depth.defaultProps = {
  handleClick: null,
};

export default Depth;
