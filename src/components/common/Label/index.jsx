import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.label`
  user-select: none;
`;

const Label = ({ children, htmlFor }) => (
  <Wrapper htmlFor={htmlFor}>
    {children}
  </Wrapper>
);

Label.propTypes = {
  children: PropTypes.shape(),
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  children: '',
  htmlFor: '',
};

export { Label };
