import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Titlebar = ({ children }) => (
  <div className={`${cx('c-titlebar')}`}>
    {children}
  </div>
);

Titlebar.propTypes = {
  children: React.PropTypes.node,
};

export default Titlebar;
