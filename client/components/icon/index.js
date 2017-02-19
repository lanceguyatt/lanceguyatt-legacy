import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const icons = require('../../assets/icons.svg');

const cx = classnames.bind(styles);

const Icon = ({ name }) => {
  const className = cx('c-icon', `c-icon--${name}`);

  return (
    <svg className={className}>
      <use xlinkHref={`${icons}#i-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

Icon.defaultProps = {
  name: '',
};

export default Icon;
