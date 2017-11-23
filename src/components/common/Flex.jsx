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

const minHeight = responsiveStyle({
  prop: 'minHeight',
  cssProperty: 'minHeight',
});

const Wrapper = styled(({
  borderColor,
  data,
  height,
  minHeight,
  ...rest
}) => <BaseComponent {...rest} />)`
  display: flex;
  ${alignItems}
  ${borderColor}
  ${borderWidth}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${minHeight}
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
