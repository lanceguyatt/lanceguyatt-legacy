import React from 'react';

import styles from './style.css';

const Action = ({ name, url, external, onClick }) => external ? <a className={styles.action} href={url} target="_blank">{name}</a> : <button className={styles.action} onClick={onClick}>{name}</button>;

Action.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

Action.defaultProps = {
  name: '',
  url: '',
  external: true,
  onClick: null,
};

export default Action;
