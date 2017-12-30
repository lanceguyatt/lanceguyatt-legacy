import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  appearance: none;
  background-color: transparent;
  background-image: url(${require('./sizing.svg')});
  border-radius: 0;
  border: 0;
  display: block;
  height: 20px;
  outline: 0;
  user-select: none;
  width: 18px;

  &:active {
    background-position: -18px 0;
  }
`;

const Sizing = props => (
  <Wrapper {...props} title="Sizing" />
);

export { Sizing };
