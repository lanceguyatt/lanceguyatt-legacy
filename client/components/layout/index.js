import React from 'react';
import styles from './style.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Layout = ({ children }) => (
  <div className="c-app">
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
