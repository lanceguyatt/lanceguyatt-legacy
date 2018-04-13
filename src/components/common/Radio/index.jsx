import React from 'react';

import { Box } from '../Box';

const Component = Box.extend.attrs({
  is: 'input',
  type: 'radio',
  bg: 'transparent',
  backgroundImage: require('./radio.svg'),
  width: 18,
  height: 17,
})`
  appearance: none;
  outline: 0;

  &:checked {
    background-position: -17px 0;
  }
`;

const Radio = props => <Component {...props} />;

export { Radio };
