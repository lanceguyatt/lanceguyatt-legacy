/* eslint no-confusing-arrow: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Box } from 'grid-styled';

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
  ${props =>
    props.animate ? `animation: ${pulse} 1.5s infinite ease-in-out` : null};
  ${props =>
    props.error
      ? `
    border-color: #ed1c24;
    color: #ed1c24;
    `
      : null};
`;

const Alert = props => {
  const { item, error, animate, className } = props;
  return (
    <Wrapper
      role={'dialog'}
      error={error}
      animate={animate}
      className={className}
      p={3}
      m={3}
    >
      <Link to={item.url}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </Link>
    </Wrapper>
  );
};

Alert.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
  }),
  error: PropTypes.boolean,
  animate: PropTypes.boolean,
  className: PropTypes.string
};

Alert.defaultProps = {
  item: {
    name: 'Alert name',
    description: 'Alert description',
    url: '#'
  },
  error: false,
  animate: false,
  className: ''
};

export default Alert;
