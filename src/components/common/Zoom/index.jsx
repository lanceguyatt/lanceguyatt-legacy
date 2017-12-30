import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  appearance: none;
  background-color: transparent;
  background-image: url(${require('./zoom.svg')});
  border-radius: 0;
  border: 0;
  display: block;
  height: 22px;
  outline: 0;
  user-select: none;
  width: 23px;

  &:active {
    background-position: -23px 0;
  }
`;


const Zoom = props => (
  <Wrapper {...props} title="Zoom" />
);

export { Zoom };
