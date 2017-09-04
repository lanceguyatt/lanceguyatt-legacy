import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import depthUnSelected from './depth-unselected.svg';
import depthSelected from './depth-selected.svg';

const Wrapper = styled.button`
  appearance: none;
  background-image: url(${depthUnSelected});
  display: inline-block;
  overflow: hidden;
  text-indent: -999999px;
  ${size('22px', '23px')};
  border: none;
  outline: 0;

  &:active {
    background-image: url(${depthSelected});
  }
`;

const Depth = (props) => {
  const { onClick } = props;
  return (
    <Wrapper onClick={onClick} />
  );
};

Depth.propTypes = {
  onClick: PropTypes.func,
};

Depth.defaultProps = {
  onClick: null,
};

export { Depth };
