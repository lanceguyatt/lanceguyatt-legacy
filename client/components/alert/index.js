import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import styles from './style.css';

const Alert = ({ alert }) => (
  <div styleName={`alert ${alert.type}`} role="dialog">
    <h2>{alert.name}</h2>
    <p>{alert.description}</p>
    <Link to={alert.url} styleName="alert__link">{alert.name}</Link>
  </div>
);

Alert.propTypes = {
  alert: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    type: React.PropTypes.oneOf(['info', 'error']),
  }),
};

export default CSSModules(Alert, styles, { allowMultiple: true });
