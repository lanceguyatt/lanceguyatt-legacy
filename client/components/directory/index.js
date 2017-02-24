import React from 'react';
import { Link } from 'react-router';
import R from 'ramda';
import classnames from 'classnames/bind';

import Icon from '../icon/';

import styles from './style.css';

const cx = classnames.bind(styles);

const DirectoryList = ((children, cssClasses) => {
  const className = cx('c-directory', cssClasses);

  return (
    <ul className={className}>{children}</ul>
  );
});

const DirectoryListItem = ({ id, name, url, type, external }) => {
  const inner = (
    <div>
      <div className={cx('c-directory__item__link__icon-inactive')}>
        <Icon name={type} />
      </div>
      <div className={cx('c-directory__item__link__icon-active')}>
        <Icon name={`${type}-active`} />
      </div>
      {name}
    </div>
  );

  const bar = (
    <Link to={url} className={cx('c-directory__item__link')} activeClassName={cx('c-directory__item__link--active')}>
      {inner}
    </Link>
  );

  const foo = (
    <a href={url} className={cx('c-directory__item__link')} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );

  return (
    <li className={cx('c-directory__item')} key={id}>
      {external === 'true' ? foo : bar}
    </li>
  );
};

DirectoryListItem.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  type: React.PropTypes.string,
  external: React.PropTypes.string,
};

const Directory = R.compose(DirectoryList, R.map(DirectoryListItem), R.prop('data'));

export default Directory;
