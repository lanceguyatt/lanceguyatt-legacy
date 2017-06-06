import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Box = ({ children }) => (
  <div className={styles.box}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node,
};

Box.defaultProps = {
  children: '',
};

export default Box;
