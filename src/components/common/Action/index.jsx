/* eslint no-shadow: 0, jsx-a11y/anchor-has-content: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
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
  bg: 'transparent',
  border: 2,
  flex: 'none',
  fontWeight: 'normal',
  height: 24,
  fontSize: 2,
  lineHeight: 2,
  textAlign: 'center',
  buttonStyle: 'action.primary',
  active: {
    borderImage: `url(${selected}) 2 stretch`,
  },
})`
  border-image: url(${unselected}) 2 stretch;
  outline: 0;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
`;

const Action = (props) => {
  const {
    name, href, external,
  } = props;
  return (
    <Wrapper
      is={href ? 'a' : 'button'}
      href={href}
      title={name}
      external={external}
      {...props}
    >
      {name}
    </Wrapper>
  );
};

// Action.propTypes = {
//   name: PropTypes.string,
//   href: PropTypes.string,
//   external: PropTypes.bool,
// };
//
// Action.defaultProps = {
//   name: 'Action name',
//   href: '#',
//   external: false,
// };

export { Action };
