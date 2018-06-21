import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import styles from './style.css';

export default function Alert({ alert }) {
  return (
    <div className={styles.alertError} role="dialog">
      <h2>{alert.name}</h2>
      <p>{alert.description}</p>
      <Link to={alert.url} className={styles.alertLink}>
        {alert.name}
      </Link>
    </div>
  );
}

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
