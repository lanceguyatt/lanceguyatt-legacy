import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
  appearance: none;
  background-color: transparent;
  background-image: url(${require('./checkbox.svg')});
  height: 22px;
  width: 26px;
  outline: 0;

  &:checked {
    background-position: -26px 0;
  }
`;

const Checkbox = (props) => {
  const { id, name } = props;
  return (
    <Wrapper
      type="checkbox"
      id={id}
      name={name}
    />
  );
};

export { Checkbox };
