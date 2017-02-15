import React from 'react';
import { Link } from 'react-router';
import R from 'ramda';
import classnames from 'classnames/bind';

// import Icon from '../icon/';

import styles from './style.css';

const cx = classnames.bind(styles);

const DirectoryList = children => (
  <ul className={cx('c-directory')}>{children}</ul>
);

const DirectoryListItem = ({ id, name, url }) => (
  <li className={cx('c-directory__item')} key={id}>
    <Link className={cx('c-directory__item__link')} to={url}>
      {name}
    </Link>
  </li>
);

DirectoryListItem.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
};

const Directory = R.compose(DirectoryList, R.map(DirectoryListItem), R.prop('directory'));

export default Directory;
