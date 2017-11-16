/* eslint no-shadow: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Box as BaseBox } from 'grid-styled';
import {
  borderColor,
  borderWidth,
  color,
  flex,
  fontSize,
  removeProps,
  responsiveStyle,
  space,
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
  ...rest
}) => <BaseComponent {...rest} />)`
  ${borderColor}
  ${borderWidth}
  ${color}
  ${flex}
  ${fontSize}
  ${height}
  ${lineHeight}
  ${position}
  ${space}
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
