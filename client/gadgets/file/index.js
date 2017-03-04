import React from 'react';

import styles from './style.css';

const File = ({ data }) => (
  <a className={styles.file} href={data.url} target="_blank" rel="noopener noreferrer">
    <span className={styles.fileImage} />
    <span className={styles.fileName}>{data.name}</span>
  </a>
);

File.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    url: React.PropTypes.string,
  }),
};

File.defaultProps = {
  data: {
    name: '',
    url: '#',
  },
};

export default File;
