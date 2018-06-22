import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export const File = ({ item }) => (
  <a
    className={styles.file}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={styles.fileImage} />
    <span className={styles.fileName}>{item.name}</span>
  </a>
);

File.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

File.defaultProps = {
  item: {
    name: '',
    url: '#',
  },
};
