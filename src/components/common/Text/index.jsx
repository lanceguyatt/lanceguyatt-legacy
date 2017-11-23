import React from 'react';
import styled from 'styled-components';

import text from './text.svg';

const Wrapper = styled.input`
  border-image: url(${text}) 4 stretch;
  border-style: solid;
  border-width: 4px;
  height: 28px;
  padding: 0 3px;
`;

export function Text(props) {
  return (
    <Wrapper
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
}
