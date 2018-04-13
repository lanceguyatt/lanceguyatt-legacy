/* eslint no-confusing-arrow: 0, no-shadow: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
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
}) => (<Box {...props} />)).attrs({
  border: 3,
  m: 3,
  maxWidth: 640,
  p: 3,
  textAlign: 'center',
})`
  ${props => props.animate ? `animation: ${pulse} 1.5s infinite ease-in-out` : null};
`;

const Alert = (props) => {
  const { data } = props;
  const { name, description, url } = data;
  return (
    <Wrapper {...props}>
      <Link to={url} href={url}>
        <h2>{name}</h2>
        <p>{description}</p>
      </Link>
    </Wrapper>
  );
};

// Alert.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     url: PropTypes.string,
//   }),
//   animate: PropTypes.bool,
// };

Alert.defaultProps = {
  colors: 'danger',
  data: {
    name: 'Alert name',
    description: 'Alert description',
    url: null,
  },
  animate: false,
};

export { Alert };
