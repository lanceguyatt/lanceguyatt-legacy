import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Button = ({ name, url, external }) => {
  const target = external ? '_blank' : null;

  return (
    <a styleName="button" href={url} target={target}>{name}</a>
  );
};

Button.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.string,
};

export default CSSModules(Button, styles);
