import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box as BaseBox } from 'grid-styled';
import { space, width, fontSize, color } from 'styled-system';

const Wrapper = styled(({ danger, primary, animate, ...rest }) => <BaseBox {...rest} />)`
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
