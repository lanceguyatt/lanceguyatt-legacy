/* eslint no-confusing-arrow: 0 */
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { removeProps } from 'styled-system';
import { position } from 'polished';

import window from './window-2.svg';

const BaseWrapper = (props) => {
  const next = removeProps(props);
  return <Flex {...next} />;
};

const Wrapper = styled(BaseWrapper)`
  border-image: url(${window}) 29 55 71 21 stretch;
  border-style: solid;
  border-width: 29px 55px 71px 21px;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  position: relative;
`;

const Foo = styled(BaseWrapper)`
  background-color: ${props => props.theme.colors.secondary};
  overflow: scroll;
  border: 5px solid purple;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  ${position(
    'absolute',
    '-7px',
    '-37px',
    '-51px',
    '-17px',
  )}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  Wrapper,
  Foo,
};
