import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

const Wrapper = Box.extend.attrs({
  is: 'input',
  type: 'checkbox',
  backgroundImage: require('./checkbox.svg'),
  bg: 'transparent',
  border: 0,
  width: 26,
  height: 22,
  active: {
    backgroundPosition: '-26px 0',
  },
})`
  appearance: none;
  outline: 0;

  &:checked {
    background-position: -52px 0;
  }
`;

const Checkbox = (props) => {
  const { id, name } = props;
  return (
    <Wrapper
      id={id}
      name={name}
    />
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export { Checkbox };
