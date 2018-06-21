/* eslint no-shadow: 0, jsx-a11y/anchor-has-content: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';

// import selected from './selected.svg';
// import unselected from './unselected.svg';

const Wrapper = styled(({
  external,
  name,
  ...props
}) => <Box {...props} />).attrs({
  px: 4,
  display: 'inline-block',
  bg: 'transparent',
  border: 2,
  fontWeight: 'normal',
  height: 24,
  fontSize: 2,
  lineHeight: 2,
  textAlign: 'center',
  buttonStyle: 'action.primary',
  active: {
    borderImage: 'url(data:image/svg+xml;utf8,<svg width="64" height="24" viewBox="0 0 64 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h63v2H0V0zm0 22h1v2H0v-2zM0 2h2v20H0V2z" fill="#000"/><path d="M1 22h63v2H1v-2zM62 2h2v20h-2V2zm1-2h1v2h-1V0z" fill="#FFF"/></g></svg>) 2 stretch',
  },
})`
  border-image: url('data:image/svg+xml;utf8,<svg width="64" height="24" viewBox="0 0 64 24" xmlns="http://www.w3.org/2000/svg"><title>button</title><g fill="none" fill-rule="evenodd"><path d="M1 22h63v2H1v-2zM62 2h2v20h-2V2zm1-2h1v2h-1V0z" fill="#000"/><path d="M0 0h63v2H0V0zm0 2h2v20H0V2zm0 20h1v2H0v-2z" fill="#FFF"/></g></svg>
') 2 stretch;
  text-overflow: ellipsis;
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
