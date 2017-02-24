import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import Icon from '../icon/';

import styles from './style.css';

const cx = classnames.bind(styles);

const IconLink = ({ name, url, icon }) => (
  <Link to={url} className={cx('c-icon-link')}>
    <div className={cx('c-icon-link__inactive')}>
      <Icon name={icon} />
    </div>
    <div className={cx('c-icon-link__active')}>
      <Icon name={`${icon}-active`} />
    </div>
    {name}
  </Link>
);

IconLink.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  icon: React.PropTypes.string,
};

export default IconLink;
