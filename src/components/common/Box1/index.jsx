import React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';

import image from './box.svg';

const Wrapper = styled(Box)`
  border-image: url(${image}) 4 stretch;
  border-style: solid;
  border-width: 4px;
  padding: 2px;
`;

const Box1 = (props) => {
  const { children } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

export { Box1 };
