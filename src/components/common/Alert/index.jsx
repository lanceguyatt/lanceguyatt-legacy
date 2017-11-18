/* eslint no-confusing-arrow: 0, no-shadow: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
  borderColor,
  borderWidth,
  color,
  removeProps,
  space,
  textAlign,
} from 'styled-system';

const pulse = keyframes`
  0% {
    border-color: currentColor;
  }

  100% {
    border-color: transparent;
  }
`;

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <Link {...next} />;
};

const Wrapper = styled(({
  animate,
  borderColor,
  data,
  ...props
}) => <BaseComponent {...props} />).attrs({
  align: 'center',
  borderColor: 'primary',
  borderWidth: '6px',
  color: 'danger',
  m: 3,
  p: 3,
  role: 'dialog',
})`
  ${borderColor}
  ${borderWidth}
  ${color}
  ${space}
  ${textAlign}
  max-width: 640px;
  user-select: none;
  ${props => props.animate ? `animation: ${pulse} 1.5s infinite ease-in-out` : null};
`;

const Alert = (props) => {
  const { data } = props;
  const { name, description, url } = data;
  return (
    <Wrapper to={url} href={url} {...props}>
      <h2>{name}</h2>
      <p>{description}</p>
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
