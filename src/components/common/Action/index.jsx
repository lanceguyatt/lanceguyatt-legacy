/* eslint no-shadow: 0, jsx-a11y/anchor-has-content: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';
import styled from 'styled-components';

import selected from './selected.svg';
import unselected from './unselected.svg';

const Wrapper = styled(({
  external,
  color,
  ...rest
}) => <a {...rest} />).attrs({
  px: 4,
  color: 'dark',
  bg: 'secondary',
})`
  border-image: url(${unselected}) 2 stretch;
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
  outline: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  ${color}
  ${space}

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primary};
    border-image: url(${selected}) 2 stretch;
  }
`;

export const Button = styled(Wrapper).attrs({
})`
  appearance: none;
`;

export const A = styled(Wrapper).attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})``;


const Action = (props) => {
  const {
    name, href, onClick, external,
  } = props;
  return (
    href
      ? <A href={href} external={external} {...props}>{name}</A>
      : <Button onClick={onClick} {...props}>{name}</Button>
  );
};

Action.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  name: 'Action name',
  href: '',
  onClick: null,
};

export { Action };
