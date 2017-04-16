import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Close = ({ url }) => (
  <a href={url} className={styles.close}>Close</a>
);

Close.propTypes = {
  url: PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export default Close;
