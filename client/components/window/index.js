import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ name }) => (
  <div className={cx('c-window')}>
    <h2>{name}</h2>
    <div className={cx('c-window__main')}>
      <p>Items</p>
    </div>
  </div>
);

Window.propTypes = {
  name: PropTypes.string,
};

export default Window;
