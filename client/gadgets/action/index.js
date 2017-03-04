import React from 'react';

import styles from './style.css';

const Action = ({ name, url, external, onClick }) => {
  const target = external ? '_blank' : null;

  return (
    <button className={styles.action} href={url} target={target} onClick={onClick}>{name}</button>
  );
};

Action.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

Action.defaultProps = {
  name: '',
  url: '',
  external: '',
  onClick: null,
};

export default Action;
