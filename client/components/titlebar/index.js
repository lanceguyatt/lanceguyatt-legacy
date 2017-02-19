import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Titlebar = ({ children }) => (
  <div className={`${cx('c-titlebar')}`}>
    <div className={`${cx('c-titlebar__inner')}`}>
      {children}
    </div>
  </div>
);

Titlebar.propTypes = {
  children: React.PropTypes.shape(),
};

export default Titlebar;
