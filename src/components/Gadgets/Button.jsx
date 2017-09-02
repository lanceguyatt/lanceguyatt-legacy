import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  border: 1px solid red;
  display: inline-block;
  user-select: none;
`;

const Button = props => <Wrapper to="#">{props.children}</Wrapper>;

Button.propTypes = {
  children: PropTypes.shape()
};

Button.defaultProps = {
  children: ''
};

export { Button };
