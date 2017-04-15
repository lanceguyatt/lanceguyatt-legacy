import React from 'react';
import PropTypes from 'prop-types';

import File from '../../gadgets/file/';
import Drawer from '../../gadgets/drawer/';

import styles from './style.css';

const DirectoryItem = ({ item }) => (
  <li className={styles.directoryItem}>
    { item.type === 'file' ? <File item={item} /> : <Drawer item={item} /> }
  </li>
);

DirectoryItem.propTypes = {
  item: PropTypes.obj,
};

DirectoryItem.defaultProps = {
  item: {},
};

const Directory = ({ items, wrap }) => {
  const renderItems = items.map(item => (
    <DirectoryItem item={item} key={item.url} /> : null),
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
  items: PropTypes.arrayOf(React.PropTypes.object),
  wrap: PropTypes.bool,
};

Directory.defaultProps = {
  items: {},
  wrap: false,
};

export default Directory;
