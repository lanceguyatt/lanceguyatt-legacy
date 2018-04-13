import React from 'react';

import { Box } from '../Box';

const Wrapper = Box.extend.attrs({
  is: 'button',
  bg: 'transparent',
  backgroundImage: require('./depth.svg'),
  borderRadius: 0,
  border: 0,
  width: 23,
  height: 22,
  focus: {
    outline: 0,
  },
  active: {
    backgroundPosition: '-23px 0',
  },
})``;

const Depth = props => <Wrapper {...props} />;

export { Depth };
