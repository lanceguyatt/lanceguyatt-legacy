import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import styles from './style.css';

const cx = classnames.bind(styles);

const Alert = ({ name, description, url }) => (
  <div className={cx('c-alert')} role="dialog">
    <h2>{name}</h2>
    <p>{description}</p>
    <Link to={url} className={cx('c-alert__link')}>{name}</Link>
  </div>
);

Alert.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default Alert;
