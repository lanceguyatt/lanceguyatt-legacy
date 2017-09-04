import { Link as Foo } from 'react-router-dom';
import styled from 'styled-components';
import { padding } from 'polished';

import actionUnselected from './action-unselected.svg';
import actionSelected from './action-selected.svg';

const Wrapper = styled.button.attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})`
  ${padding(null, '20px')};
  border-image: url(${actionUnselected}) 2 stretch;
  border-style: solid;
  border-width: 2px;
  color: ${props => props.theme.colors.black};
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
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

const Button = styled(Wrapper)`
  appearance: none;
`;

const Link = Wrapper.withComponent(Foo);

export {
  Button,
  Link,
};
