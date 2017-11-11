/* eslint no-shadow: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderColor, borderWidth, color, fontSize, space, width, responsiveStyle } from 'styled-system';
import { Flex as BaseFlex } from 'grid-styled';

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
});

const Wrapper = styled(({
  bg,
  borderBottom,
  borderColor,
  borderTop,
  borderWidth,
  color,
  fontSize,
  height,
  space,
  width,
  ...rest
}) => <BaseFlex {...rest} />)`
  ${borderColor}
  ${borderWidth}
  ${color}
  ${height}
  ${fontSize}
  ${space}
  ${width}
`;

const Flex = (props) => {
  const { children } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
};

Flex.defaultProps = {
  children: '',
};

export { Flex };
