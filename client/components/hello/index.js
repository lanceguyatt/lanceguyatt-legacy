// ==================================================
// Hello
// ==================================================

import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

import Window from '../window/window';
import Alert from '../alert/index';

const cx = classnames.bind(styles);

const Hello = () => (
  <div className={cx('wrap')}>
    <h1 className={cx('heading')}>Hello React</h1>
    <div>🙈</div>
    <Window name="Workbench" />
    <Alert
      name="Software Failure. Press left mouse button to continue"
      description="Guru Meditation #404"
    />
  </div>
);

export default Hello;
