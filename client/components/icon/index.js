import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const icons = require('../../assets/icons.svg');

const cx = classnames.bind(styles);

const Icon = ({ name }) => (
  <svg className={`${cx('c-icon')} c-icon--${name}`}>
    <use xlinkHref={`${icons}#i-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

Icon.defaultProps = {
  name: '',
};

export default Icon;
