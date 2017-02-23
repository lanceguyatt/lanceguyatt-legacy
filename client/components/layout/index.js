import React from 'react';
import './style.css';

const Layout = ({ children }) => (
  <div className="c-app">
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
