import React from 'react';

import { Box } from '../Box';

const Wrapper = Box.extend.attrs({
  is: 'button',
  bg: 'transparent',
  backgroundImage: require('./sizing.svg'),
  borderRadius: 0,
  border: 0,
  width: 18,
  height: 20,
  focus: {
    outline: 0,
  },
  active: {
    backgroundPosition: '-18px 0',
  },
})``;

export const Sizing = props => <Wrapper {...props} title="Sizing" />;
