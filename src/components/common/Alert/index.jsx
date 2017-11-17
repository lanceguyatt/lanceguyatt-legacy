/* eslint no-confusing-arrow: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Box } from '../Box';

const pulse = keyframes`
  0% {
    border-color: currentColor;
  }

  100% {
    border-color: transparent;
  }
`;

const Wrapper = styled(({
  animate,
  data,
  ...props
}) => <Box {...props} />).attrs({
  align: 'center',
  borderColor: 'danger',
  borderWidth: '6px',
  color: 'danger',
  m: 3,
  p: 3,
  role: 'dialog',
})`
  max-width: 640px;
  user-select: none;
  ${props => props.animate ? `animation: ${pulse} 1.5s infinite ease-in-out` : null};
`;

const Alert = (props) => {
  const { data } = props;
  const { name, description, url } = data;
  return (
    <Wrapper
      {...props}
    >
      <h2>{name}</h2>
      <Link to={url} href={url}>{description}</Link>
    </Wrapper>
  );
};

Alert.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  animate: PropTypes.bool,
};

Alert.defaultProps = {
  data: {
    name: 'Alert name',
    description: 'Alert description',
    url: null,
  },
  animate: false,
};

export { Alert };

// ${props => props.primary ? `border-color: ${props.theme.colors.primary}; color: ${props.theme.colors.primary};` : null};
// ${props => props.secondary ? `border-color: ${props.theme.colors.secondary}; color: ${props.theme.colors.secondary};` : null};
// ${props => props.dark ? `border-color: ${props.theme.colors.dark}; color: ${props.theme.colors.dark};` : null};
// ${props => props.light ? `border-color: ${props.theme.colors.light}; color: ${props.theme.colors.light};` : null};
// ${props => props.danger ? `border-color: ${props.theme.colors.danger}; color: ${props.theme.colors.danger};` : null};
