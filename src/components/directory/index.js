/* eslint react/forbid-prop-types: 1 */
import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, File } from '../common';

import styles from './style.css';

const DirectoryItem = ({ item }) => (
  <li className={styles.directoryItem}>
    {item.type === 'file' ? <File item={item} /> : <Drawer item={item} />}
  </li>
);

DirectoryItem.propTypes = {
  item: PropTypes.shape,
};

DirectoryItem.defaultProps = {
  item: {},
};

export default function Directory({ items, wrap }) {
  const renderItems = items.map(
    (item) => (<DirectoryItem item={item} key={item.id} />: null),
  );

  return (
    <nav>
      <ul className={wrap ? styles.directoryRow : styles.directory}>
        {renderItems}
      </ul>
    </nav>
  );
}

Directory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  wrap: PropTypes.bool,
};

Directory.defaultProps = {
  items: {},
  wrap: false,
};
