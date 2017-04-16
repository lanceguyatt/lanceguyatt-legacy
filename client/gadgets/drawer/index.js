import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Drawer = ({ item }) => (
  <a href={item.url} className={styles.drawer} activeClassName={styles.drawerActive}>
    <span className={styles.drawerImage} />
    <span className={styles.drawerName}>{item.name}</span>
  </a>
);

Drawer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

Drawer.defaultProps = {
  item: {
    name: '',
    url: '',
  },
};

export default Drawer;
