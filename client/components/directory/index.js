import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import R from 'ramda';

import Icon from '../icon/';

import styles from './style.css';

const DirectoryList = ({ children, cssClasses }) => (
  <ul styleName={`directory ${cssClasses}`}>{children}</ul>
);

DirectoryList.propTypes = {
  children: React.PropTypes.node,
  cssClasses: React.PropTypes.string,
};

const DirectoryListItem = ({ id, name, url, type, external }) => {
  const inner = (
    <div>
      <div styleName="directory__item__link__icon-inactive">
        <Icon name={type} />
      </div>
      <div styleName="directory__item__link__icon-active">
        <Icon name={`${type}-active`} />
      </div>
      {name}
    </div>
  );

  const bar = (
    <Link to={url} className="directory__item__link" activeClassName="directory__item__link--active">
      {inner}
    </Link>
  );

  const foo = (
    <a href={url} styleName="directory__item__link" target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );

  return (
    <li styleName="directory__item" key={id}>
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

const Directory = R.compose(CSSModules(DirectoryList, styles, { allowMultiple: true }), R.map(CSSModules(DirectoryListItem, styles, { allowMultiple: true })), R.prop('data'));

export default CSSModules(Directory, styles, { allowMultiple: true });
