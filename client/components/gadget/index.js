import React from 'react';

import styles from './style.css';

const Gadget = ({ name }) => (
  <button className={styles.gadget}>{name}</button>
);

Gadget.propTypes = {
  name: React.PropTypes.string,
};

Gadget.defaultProps = {
  name: '',
};

export default Gadget;
