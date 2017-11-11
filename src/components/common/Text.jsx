import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

const Wrapper = styled(Box)`
  height: 22px;
  line-height: 1.125;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

export const Text = props => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
);
