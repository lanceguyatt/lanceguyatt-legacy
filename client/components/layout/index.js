import React from 'react';
import './style.css';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
