/* eslint no-confusing-arrow: 0 */
import React from 'react';
import styled from 'styled-components';
import { position } from 'polished';

import { Flex, Box } from '../common';

import window from './window-2.svg';

const Wrapper = styled(({ item, ...rest }) => <Flex {...rest} />)`
  border-image: url(${window}) 29 55 71 21 stretch;
  border-style: solid;
  border-width: 29px 55px 71px 21px;
  position: relative;
`;

const Foo = styled(Box)`
  overflow: scroll;
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
