import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Close = ({ url }) => (
  <Link to={url} styleName="close">Close</Link>
);

Close.propTypes = {
  url: React.PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export default CSSModules(Close, styles);
