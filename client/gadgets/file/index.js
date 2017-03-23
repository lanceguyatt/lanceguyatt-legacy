import React from 'react';

import styles from './style.css';

const File = ({ item }) => (
  <a className={styles.file} href={item.url} target="_blank" rel="noopener noreferrer">
    <span className={styles.fileImage} />
    <span className={styles.fileName}>{item.name}</span>
  </a>
);

File.propTypes = {
  item: React.PropTypes.shape({
    name: React.PropTypes.string,
    url: React.PropTypes.string,
  }),
};

File.defaultProps = {
  item: {
    name: '',
    url: '#',
  },
};

export default File;
