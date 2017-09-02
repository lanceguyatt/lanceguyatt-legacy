// import { Link as Foo } from 'react-router-dom';
import styled from 'styled-components';
import { padding } from 'polished';

import actionUnselected from './action-unselected.svg';
import actionSelected from './action-selected.svg';

const Wrapper = styled.button`
  appearance: none;
  border-image: url(${actionUnselected}) 2 stretch;
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  outline: 0;
  font-size: 16px;
  font-family: inherit;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  color: ${props => props.theme.colors.black};
  ${padding(null, '20px')};

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primary};
    border-image: url(${actionSelected}) 2 stretch;
    box-shadow: none;
  }
`;

export const Button = styled(Wrapper)``;
