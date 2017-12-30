import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  appearance: none;
  background-color: transparent;
  background-image: url(${require('./depth.svg')});
  border-radius: 0;
  border: 0;
  height: 22px;
  outline: 0;
  width: 23px;
  user-select: none;

  &:active {
    background-position: -23px 0;
  }
`;

const Depth = props => (
  <Wrapper {...props} title="Depth" />
);

export { Depth };
