import React from 'react';

import Depth from '../../gadgets/depth/';

import styles from './style.css';

const Titlebar = ({ titlebar, isWindow, depth }) => (
  <div className={isWindow ? styles.titlebarWindow : styles.titlebarDefault}>
    {titlebar}
    {depth ? <Depth /> : null}
  </div>
);

Titlebar.propTypes = {
  titlebar: React.PropTypes.string,
  isWindow: React.PropTypes.bool,
  depth: React.PropTypes.bool,
};

Titlebar.defaultProps = {
  titlebar: 'Name here',
  isWindow: false,
  depth: false,
};

export default Titlebar;
