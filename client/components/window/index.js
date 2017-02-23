import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import Icon from '../../components/icon/';

import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ parent, name, children, cssClasses }) => {
  const className = cx('c-window', cssClasses);

  return (
    <div className={className}>
      <div className={`${cx('c-window__header')}`}>
        <Link to={parent}>
          <Icon name="close" />
        </Link>
        {name} sdsdsd sdsd  sd sd sd sd s sd sdsdsdsd
      </div>
      <div className={`${cx('c-window__main')}`}>
        {children}
      </div>
    </div>
  );
};

Window.propTypes = {
  parent: React.PropTypes.string,
  name: React.PropTypes.string,
  children: React.PropTypes.node,
  cssClasses: React.PropTypes.string,
};

export default Window;
