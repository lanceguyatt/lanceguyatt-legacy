import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import styles from './style.css';
import utilites from '../../styling/utilities/index.css';

const cx = classnames.bind(styles);
const yo = classnames.bind(utilites);

const Alert = ({ alert, cssClasses }) => {
  const className = cx('c-alert', `${cssClasses}`);

  return (
    <div className={className} role="dialog">
      <h2>{alert.name}</h2>
      <p>{alert.description}</p>
      <Link to={alert.url} className={cx('c-alert__link')}>{alert.name}</Link>
    </div>
  );
};

Alert.propTypes = {
  alert: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
  }),
  cssClasses: React.PropTypes.string,
};

Alert.defaultProps = {
  cssClasses: '',
};

export default Alert;
