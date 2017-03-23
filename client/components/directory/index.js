import React from 'react';

import File from '../../gadgets/file/';
import Drawer from '../../gadgets/drawer/';

import styles from './style.css';

const DirectoryItem = ({ item }) => (
  <li className={styles.directoryItem}>
    { item.type === 'file' ? <File item={item} /> : <Drawer item={item} /> }
  </li>
);

DirectoryItem.propTypes = {
  item: React.PropTypes.obj,
};

DirectoryItem.defaultProps = {
  item: {},
};

const Directory = ({ items, wrap }) => {
  const renderItems = items.map(item => (
    <DirectoryItem item={item} key={item.id} /> : null),
  );
  return (
    <nav>
      <ul className={wrap ? styles.directoryRow : styles.directory}>
        {renderItems}
      </ul>
    </nav>
  );
};

Directory.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  wrap: React.PropTypes.bool,
};

Directory.defaultProps = {
  items: {},
  wrap: false,
};

export default Directory;
