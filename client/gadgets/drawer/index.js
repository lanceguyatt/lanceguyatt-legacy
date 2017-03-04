import React from 'react';
import { Link } from 'react-router';

import styles from './style.css';

const Drawer = ({ data }) => (
  <Link className={styles.drawer} href={data.url}>
    <span className={styles.drawerImage} />
    <span className={styles.drawerName}>{data.name}</span>
  </Link>
);

Drawer.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    url: React.PropTypes.string,
  }),
};

Drawer.defaultProps = {
  data: {
    name: '',
    url: '#',
  },
};

export default Drawer;
