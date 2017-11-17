/* eslint no-shadow: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { flex, flexDirection } from 'styled-system';

CSSTransition.childContextTypes = {};

const Wrapper = styled(({ flexDirection, ...props }) => <CSSTransition {...props} />)`
  display: flex;
  ${flex}
  ${flexDirection}
`;

const Fader = props => (
  <Wrapper
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
    activeStyle={{ opacity: 1 }}
  />
);

// Fader.propTypes = {
//   children: PropTypes.node,
// };
//
// Fader.defaultProps = {
//   children: '',
// };

export { Fader };
