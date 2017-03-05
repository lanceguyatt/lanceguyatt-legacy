import React from 'react';
import { Link } from 'react-router';

import styles from './style.css';

const Drawer = ({ item }) => (
  <Link className={styles.drawer} to={item.url} activeClassName={styles.drawerActive}>
    <span className={styles.drawerImage} />
    <span className={styles.drawerName}>{item.name}</span>
  </Link>
);

Drawer.propTypes = {
  item: React.PropTypes.shape({
    name: React.PropTypes.string,
    url: React.PropTypes.string,
  }),
};

Drawer.defaultProps = {
  item: {
    name: '',
    url: '#',
  },
};

export default Drawer;
