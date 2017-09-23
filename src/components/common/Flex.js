import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex as Foo } from 'grid-styled';
import { space, width, fontSize, color } from 'styled-system';

const Wrapper = styled(Foo)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${props => props.primary ? `background-color: ${props.theme.colors.primary}` : null};
  ${props => props.secondary ? `background-color: ${props.theme.colors.secondary}` : null};
  ${props => props.dark ? `background-color: ${props.theme.colors.dark}` : null};
  ${props => props.light ? `background-color: ${props.theme.colors.light}` : null};
  ${props => props.danger ? `background-color: ${props.theme.colors.danger}` : null};
`;

const Flex = props => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
);

// Flex.propTypes = {
//   style: PropTypes.string,
// };
//
// Flex.defaultProps = {
//   style: '',
// };

export { Flex };
