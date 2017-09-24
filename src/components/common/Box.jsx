import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box as BaseBox } from 'grid-styled';
import { space, width, fontSize, color, removeProps } from 'styled-system';

const BaseWrapper = (props) => {
  const next = removeProps(props);
  return <BaseBox {...next} />;
};

const Wrapper = styled(BaseWrapper)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const Box = (props) => {
  const { children } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
};

Box.defaultProps = {
  children: '',
};

export { Box };
