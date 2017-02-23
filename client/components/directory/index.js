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

const internalLink = (name, url, type) => (
  <Link className={cx('c-directory__item__link')} to={url}>
    <Icon name={type} />
    {name}
  </Link>
);

const externalLink = (name, url, type) => (
  <a className={cx('c-directory__item__link')} href={url} target="_blank" rel="noopener noreferrer">
    <Icon name={type} />
    {name}
  </a>
);

const DirectoryListItem = ({ id, name, url, type, external }) => (
  <li className={cx('c-directory__item')} key={id}>
    { external ? externalLink(name, url, type) : internalLink(name, url, type) }
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
