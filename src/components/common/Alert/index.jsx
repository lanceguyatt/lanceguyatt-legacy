/* eslint no-confusing-arrow: 0 */
import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Flex } from 'grid-styled';

const pulse = keyframes`
  0% {
    border-color: currentColor;
  }

  100% {
    border-color: transparent;
  }
`;

const Wrapper = styled(Flex)`
  border-style: solid;
  border-width: 6px;
  line-height: 1.875;
  max-width: 640px;
  text-align: center;
  user-select: none;
  ${props => props.animate ?
    `animation: ${pulse} 1.5s infinite ease-in-out`
    : null};
  ${props => props.danger ?
    `border-color: ${props.theme.colors.danger};
     color: ${props.theme.colors.danger};
    ` : null};
  ${props => props.primary ? `border-color: ${props.theme.colors.primary}; color: ${props.theme.colors.primary};` : null};
  ${props => props.secondary ? `border-color: ${props.theme.colors.secondary}; color: ${props.theme.colors.secondary};` : null};
  ${props => props.dark ? `border-color: ${props.theme.colors.dark}; color: ${props.theme.colors.dark};` : null};
  ${props => props.light ? `border-color: ${props.theme.colors.light}; color: ${props.theme.colors.light};` : null};
`;

const Alert = (props) => {
  const { item, animate } = props;
  return (
    <Wrapper
      {...props}
      role={'dialog'}
      animate={animate}
      p={3}
      direction={'column'}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Wrapper>
  );
};

Alert.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  animate: PropTypes.boolean,
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
