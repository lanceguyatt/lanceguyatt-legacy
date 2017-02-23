import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';
import icons from '../../assets/images/icons.svg';

const cx = classnames.bind(styles);

const Icon = ({ name }) => {
  const className = cx('c-icon', `c-icon--${name}`);

  return (
    <div>
      <svg className={className} role="img">
        <use xlinkHref={`${icons}#i-${name}`} />
      </svg>
      <svg className={className} role="img">
        <use xlinkHref={`${icons}#i-${name}-active`} />
      </svg>
    </div>
  );
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Icon;
