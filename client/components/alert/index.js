import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Alert = ({ alert }) => (
  <div className={styles.alertError} role="dialog">
    <h2>{alert.name}</h2>
    <p>{alert.description}</p>
    <a href={alert.url} className={styles.alertLink}>{alert.name}</a>
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
