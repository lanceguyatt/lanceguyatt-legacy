import React from 'react';
import R from 'ramda';
import classnames from 'classnames/bind';

import IconLink from '../icon_link/';

import styles from './style.css';

const cx = classnames.bind(styles);

const DirectoryList = ((children, cssClasses) => {
  const className = cx('c-directory', cssClasses);

  return (
    <ul className={className}>{children}</ul>
  );
});

const DirectoryListItem = ({ id, name, url, type, external }) => (
  <li className={cx('c-directory__item')} key={id}>
    <IconLink url={url} name={name} icon={type} />
  </li>
);

DirectoryListItem.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  type: React.PropTypes.string,
  external: React.PropTypes.boolean,
};

const Directory = R.compose(DirectoryList, R.map(DirectoryListItem), R.prop('data'));

export default Directory;
