import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './style.css';

const Close = ({ url }) => (
  <Link to={url} className={styles.close}>Close</Link>
);

Close.propTypes = {
  url: PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export default Close;
