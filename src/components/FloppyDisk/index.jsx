import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

const FloppyDisk = props => (
  <Wrapper
    className={props.className}
    animate={props.animate}
  />
);

FloppyDisk.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.boolean,
};

FloppyDisk.defaultProps = {
  className: '',
  animate: false,
};

export default FloppyDisk;
