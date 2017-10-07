/* eslint no-confusing-arrow: 0 */
import React from 'react';
// import { Link } from 'react-router-dom';
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

const Wrapper = styled(Box)`
  border-style: solid;
  border-width: 6px;
  line-height: 1.875;
  max-width: 640px;
  text-align: center;
  user-select: none;
  ${props => props.animate ? `animation: ${pulse} 1.5s infinite ease-in-out` : null};
  ${props => props.primary ? `border-color: ${props.theme.colors.primary}; color: ${props.theme.colors.primary};` : null};
  ${props => props.secondary ? `border-color: ${props.theme.colors.secondary}; color: ${props.theme.colors.secondary};` : null};
  ${props => props.dark ? `border-color: ${props.theme.colors.dark}; color: ${props.theme.colors.dark};` : null};
  ${props => props.light ? `border-color: ${props.theme.colors.light}; color: ${props.theme.colors.light};` : null};
  ${props => props.danger ? `border-color: ${props.theme.colors.danger}; color: ${props.theme.colors.danger};` : null};
`;

const Alert = (props) => {
  const { animate, primary, danger, item } = props;
  return (
    <Wrapper
      role={'dialog'}
      danger={danger}
      animate={animate}
      primary={primary}
      p={3}
    >
      <h2>{item.name}</h2>
      <a href={item.url}>{item.description}</a>
    </Wrapper>
  );
};

Alert.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  animate: PropTypes.bool,
};

Alert.defaultProps = {
  item: {
    name: 'Alert name',
    description: 'Alert description',
    url: null,
  },
  animate: false,
};

export { Alert };
