import React from 'react';
import styled, { removeProps } from 'styled-components';
import { Flex } from 'grid-styled';

const BaseWrapper = (props) => {
  const next = removeProps(props);
  return <Flex {...next} />;
};

const Wrapper = styled(BaseWrapper)`
  ${props => props.primary ? `background-color: ${props.theme.colors.primary}` : null};
  ${props => props.secondary ? `background-color: ${props.theme.colors.secondary}` : null};
  ${props => props.dark ? `background-color: ${props.theme.colors.dark}` : null};
  ${props => props.light ? `background-color: ${props.theme.colors.light}` : null};
  ${props => props.danger ? `background-color: ${props.theme.colors.danger}` : null};
`;

const BaseFlex = props => (
  <Wrapper {...props}>{props.children}</Wrapper>
);

export { BaseFlex };
