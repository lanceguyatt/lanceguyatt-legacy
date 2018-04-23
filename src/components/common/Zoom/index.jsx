import React from 'react';

import { Box } from '../Box';

const Wrapper = Box.extend.attrs({
  is: 'button',
  bg: 'transparent',
  backgroundImage: require('./zoom.svg'),
  borderRadius: 0,
  border: 0,
  height: 22,
  width: 23,
  focus: {
    outline: 0,
  },
  active: {
    backgroundPosition: '-23px 0',
  },
})``;

const Zoom = props => <Wrapper {...props} />;

export { Zoom };
