import { Link as Foo } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../Box';
import actionUnselected from './action-unselected.svg';
import actionSelected from './action-selected.svg';

const Wrapper = styled(Box).attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
  px: 4,
  color: 'dark',
  bg: 'primary',
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
    box-shadow: none;
  }
`;

const Button = styled(Wrapper).attrs({
  is: 'button',
})`
  appearance: none;
`;

const Link = Wrapper.withComponent(Foo);

export {
  Button,
  Link,
};
