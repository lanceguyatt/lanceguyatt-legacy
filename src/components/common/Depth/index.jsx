import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import selected from './selected.svg';
import unSelected from './unselected.svg';

const Wrapper = styled.button`
  appearance: none;
  background-color: transparent;
  background-image: url(${unSelected});
  border-radius: 0;
  border: 0;
  height: 22px;
  outline: 0;
  width: 23px;
  ${color}

  &:active {
    background-image: url(${selected});
  }
`;

const Depth = props => <Wrapper {...props} />;

export { Depth };
