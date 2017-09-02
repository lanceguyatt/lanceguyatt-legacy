import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
  font-weight: 600;
  min-width: 240px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  ${props => (props.caps ? `text-transform: uppercase` : null)};
  ${props =>
    props.primary
      ? `background-color: ${props.theme.colors.primary};`
      : null} ${props => (props.white ? `color: #fff` : null)};
`;

const Button = props => (
  <Wrapper to={props.to} {...props}>
    {props.children}
  </Wrapper>
);

export default Button;
