import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

const Alert = ({ name, description }) => (

  <div className={cx('c-alert')} role="dialog">
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

Alert.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Alert;
