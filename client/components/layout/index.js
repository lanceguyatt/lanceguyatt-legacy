// ==================================================
// Layout
// ==================================================

import React from 'react';
import './style.css';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
