import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.css';

const Gadget = ({ name }) => <button styleName={`gadget gadget--${name}`} />;

Gadget.propTypes = {
  name: React.PropTypes.string,
};

export default CSSModules(Gadget, styles, { allowMultiple: true });
