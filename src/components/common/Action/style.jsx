import React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';
import actionUnselected from './action-unselected.svg';
import actionSelected from './action-selected.svg';

const Wrapper = styled(({ external, color, ...rest }) => <Box {...rest} />).attrs({
  px: 4,
  color: 'dark',
  bg: 'secondary',
})`
  border-image: url(${actionUnselected}) 2 stretch;
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
  outline: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primary};
    border-image: url(${actionSelected}) 2 stretch;
  }
`;

export const Button = styled(Wrapper).attrs({
})`
  appearance: none;
`;

export const A = styled(Wrapper).attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})``;
