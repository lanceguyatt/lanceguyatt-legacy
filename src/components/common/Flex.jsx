/* eslint no-shadow: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignItems,
  borderColor,
  borderWidth,
  color,
  flexDirection,
  flex,
  flexWrap,
  fontSize,
  justifyContent,
  removeProps,
  responsiveStyle,
  space,
  width,
} from 'styled-system';

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <div {...next} />;
};

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
});

const Wrapper = styled(({ borderColor, height, ...rest }) => <BaseComponent {...rest} />)`
  box-sizing: border-box;
  display: flex;
  ${alignItems}
  ${borderColor}
  ${borderWidth}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontSize}
  ${height}
  ${justifyContent}
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
