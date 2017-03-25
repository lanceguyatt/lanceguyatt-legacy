import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './style.css';

const Alert = ({ alert }) => (
  <div className={styles.alertError} role="dialog">
    <h2>{alert.name}</h2>
    <p>{alert.description}</p>
    <Link to={alert.url} className={styles.alertLink}>{alert.name}</Link>
  </div>
);

Alert.propTypes = {
  alert: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};

Alert.defaultProps = {
  alert: {
    name: 'Alert name',
    description: 'Alert description',
    url: '#',
  },
};

export default Alert;
