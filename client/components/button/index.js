import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Button = ({ name, url, external }) => {
  const className = cx('c-button');
  const target = external ? '_blank' : null;

  return (
    <a className={className} href={url} target={target}>{name}</a>
  );
};

Button.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.string,
};

export default Button;
