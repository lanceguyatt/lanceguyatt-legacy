import React from 'react';
import styled from 'styled-components';
import { Flex as Foo } from 'grid-styled';

const Wrapper = styled(Foo)`
  ${props => props.primary ? `background-color: ${props.theme.colors.primary}` : null};
`;

export const Flex = props => (
  <Wrapper {...props} style={props.style}>{props.children}</Wrapper>
);
