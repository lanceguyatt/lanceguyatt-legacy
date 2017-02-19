import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ children }) => (
  <div className={`${cx('c-window')}`}>
    <div className={`${cx('c-window__main')}`}>
      {children}
    </div>
  </div>
);

Window.propTypes = {
  children: React.PropTypes.node,
};

export default Window;
