import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './style';

const Action = props => (
  <Button>{props.name}</Button>
);

Action.propTypes = {
  name: PropTypes.string,
};

Action.defaultProps = {
  name: '',
};

export { Action };
