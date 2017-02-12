// ==================================================
// Hello
// ==================================================

import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

import Window from '../window/';

const cx = classnames.bind(styles);

const Hello = () => (
  <div className={cx('wrap')}>
    <h1 className={cx('heading')}>Hello React</h1>
    <div>🙈</div>
    <Window name="Workbench" />
  </div>
);

export default Hello;
