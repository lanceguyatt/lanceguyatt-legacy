import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Icon = ({ name }) => {
  const className = cx('c-icon', `c-icon--${name}`);

  return (
    <span className={className} />
  );
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Icon;
