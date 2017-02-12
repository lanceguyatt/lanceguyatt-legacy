import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import Titlebar from '../titlebar/';
import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ name, children }) => (
  <div className={cx('c-window')}>
    <Titlebar name={name} cssClasses="u-bg-white" />
    <div className={cx('c-window__main')}>
      {children}
    </div>
  </div>
);

Window.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
};

export default Window;
