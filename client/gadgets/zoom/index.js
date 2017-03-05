import React from 'react';

import styles from './style.css';

const Zoom = ({ foo }) => (
  <button className={styles.zoom} onClick={foo} />
);

Zoom.propTypes = {
  foo: React.PropTypes.func,
};

Zoom.defaultProps = {
  foo: '',
};

export default Zoom;
