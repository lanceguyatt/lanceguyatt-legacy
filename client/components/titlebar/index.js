import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

const Titlebar = ({ name, cssClasses }) => (
  <div className={`${cx('c-titlebar')} ${cx(cssClasses)}`}>
    <h2>{name}</h2>
  </div>
);

Titlebar.propTypes = {
  name: PropTypes.string,
  cssClasses: PropTypes.string,
};

export default Titlebar;
