import React from 'react';
import styled from 'styled-components';

import selected from './selected.svg';
import unSelected from './unselected.svg';

const Wrapper = styled.button`
  appearance: none;
  background-color: transparent;
  background-image: url(${unSelected});
  border-radius: 0;
  border: 0;
  display: block;
  height: 22px;
  outline: 0;
  width: 23px;

  &:active {
    background-image: url(${selected});
  }
`;


const Zoom = props => (
  <Wrapper {...props} />
);

export { Zoom };
