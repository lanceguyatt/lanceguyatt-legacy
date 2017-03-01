import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Action = ({ name, url, external }) => {
  const target = external ? '_blank' : null;

  return (
    <a styleName="action" href={url} target={target}>{name}</a>
  );
};

Action.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  external: React.PropTypes.string,
};

export default CSSModules(Action, styles);
