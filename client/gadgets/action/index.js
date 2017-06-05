import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Action = ({ name, url, external, onClick }) => (external ? <Link className={styles.action} to={url} target="_blank">{name}</Link> : <button className={styles.action} onClick={onClick}>{name}</button>);

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
