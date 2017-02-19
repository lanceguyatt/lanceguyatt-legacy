import React from 'react';
import { Link } from 'react-router';
import R from 'ramda';
import classnames from 'classnames/bind';

// import Icon from '../icon/';
import Svg from '.././svg';

import styles from './style.css';

const cx = classnames.bind(styles);

const DirectoryList = children => (
  <ul className={cx('c-directory')}>{children}</ul>
);

const DirectoryListItem = ({ id, name, url, type }) => (
  <li className={cx('c-directory__item')} key={id}>
    <Link className={cx('c-directory__item__link')} to={url}>
      {name}
      <Svg markup="folder" />
    </Link>
  </li>
);

DirectoryListItem.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  type: React.PropTypes.string,
};

const Directory = R.compose(DirectoryList, R.map(DirectoryListItem), R.prop('data'));

export default Directory;
