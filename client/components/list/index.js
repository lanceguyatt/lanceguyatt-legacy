import React from 'react';

import File from '../../gadgets/file/';
import Drawer from '../../gadgets/drawer/';

import styles from './style.css';

const List = ({ data, wrap }) => {
  const items = data.map(item => (
    <li key={item.id}>
      { item.type === 'file' ? <File data={item} /> : <Drawer data={item} />}
    </li>
  ));

  return (
    <nav>
      <ul className={wrap ? styles.listRow : styles.listColumn}>
        {items}
      </ul>
    </nav>
  );
};

List.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  wrap: React.PropTypes.bool,
};

List.defaultProps = {
  data: {},
  wrap: false,
};

export default List;
