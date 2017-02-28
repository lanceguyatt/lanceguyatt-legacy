import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Titlebar = ({ children, cssClasses }) => (
  <div styleName={`titlebar ${cssClasses}`}>
    {children}
  </div>
);

Titlebar.propTypes = {
  children: React.PropTypes.node,
  cssClasses: React.PropTypes.string,
};

export default CSSModules(Titlebar, styles, { allowMultiple: true });
