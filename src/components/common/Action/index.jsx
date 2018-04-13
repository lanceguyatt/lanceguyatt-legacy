/* eslint no-shadow: 0, jsx-a11y/anchor-has-content: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';

import selected from './selected.svg';
import unselected from './unselected.svg';

const Wrapper = styled(({
  external,
  name,
  ...props
}) => <Box {...props} />).attrs({
  px: 4,
  display: 'inline-block',
  color: 'dark',
  bg: 'secondary',
  border: 2,
  fontWeight: 'normal',
  fontSize: 2,
  lineHeight: 2,
  buttonStyle: 'primary',
  active: {
    borderImage: `url(${selected}) 2 stretch`,
  },
})`
  border-image: url(${unselected}) 2 stretch;
  outline: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
`;

// export const Button = styled(Wrapper).attrs({
// })`
//   appearance: none;
// `;
//
// export const A = styled(Wrapper).attrs({
//   target: props => props.external ? '_blank' : null,
//   rel: props => props.external ? 'noopener noreferrer' : null,
// })``;

const Action = (props) => {
  const {
    name, href, external,
  } = props;
  return (
    <Wrapper
      is={href ? 'a' : 'button'}
      href={href ? href : null}
      external={external}
      {...props}
    >
      {name}
    </Wrapper>
  );
};

Action.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  name: 'Action name !',
  href: '',
  onClick: null,
};

export { Action };
