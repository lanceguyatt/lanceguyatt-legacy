import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Gadget = ({ name, cssClasses }) => (
  <button styleName={`gadget gadget--${name} ${cssClasses}`} />
);

Gadget.propTypes = {
  name: React.PropTypes.string,
  cssClasses: React.PropTypes.string,
};

Gadget.defaultProps = {
  name: '',
  cssClasses: '',
};

export default CSSModules(Gadget, styles, { allowMultiple: true });
