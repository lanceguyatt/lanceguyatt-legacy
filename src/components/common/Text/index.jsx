import React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';

import text from './text.svg';

const Wrapper = styled(Box).attrs({
  bg: 'transparent',
  py: 0,
  px: '3px',
  height: '28px',
  border: 3,
  focus: {
    outline: 0,
  },
})`
  border-image: url(${text}) 4 stretch;
`;

const Text = (props) => {
  const { name } = props;
  return (
    <Wrapper
      is="input"
      name={name}
      type="text"
      {...props}
    />
  );
};

export { Text };
