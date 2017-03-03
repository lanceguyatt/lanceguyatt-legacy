import React from 'react';

import styles from './style.css';

const Action = ({ name, url, external }) => {
  const target = external ? '_blank' : null;

  return (
    <a className={styles.action} href={url} target={target}>{name}</a>
  );
};

Action.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.string,
};

export default Action;
