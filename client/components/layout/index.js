import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Layout = ({ children }) => {
  const className = cx('c-app');
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
