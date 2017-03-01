import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Layout = ({ children }) => (
  <div styleName="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default CSSModules(Layout, styles, { allowMultiple: true });
