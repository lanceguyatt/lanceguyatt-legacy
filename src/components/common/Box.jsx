/* eslint no-shadow: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  color,
  flex,
  fontWeight,
  fontSize,
  removeProps,
  responsiveStyle,
  space,
  textAlign,
  width,
} from 'styled-system';

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
});

const position = responsiveStyle({
  prop: 'position',
  cssProperty: 'position',
});

const lineHeight = responsiveStyle({
  key: 'lineHeights',
  prop: 'lineHeight',
  cssProperty: 'lineHeight',
});

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <div {...next} />;
};

const Wrapper = styled(({
  borderColor,
  height,
  lineHeight,
  position,
  textAlign,
  ...rest
}) => <BaseComponent {...rest} />)`
  box-sizing: border-box;
  ${alignSelf}
  ${borderColor}
  ${borderRadius}
  ${borderWidth}
  ${color}
  ${flex}
  ${fontSize}
  ${fontWeight}
  ${height}
  ${lineHeight}
  ${position}
  ${space}
  ${textAlign}
  ${width}
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
