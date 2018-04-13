/* eslint no-shadow: 0 */
import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { display, flex, flexDirection } from 'styled-system';

CSSTransition.childContextTypes = {};

const Wrapper = styled(({
  display,
  flex,
  flexDirection,
  ...props
}) => <CSSTransition {...props} />).attrs({
  display: 'flex',
})`
  ${display}
  ${flex}
  ${flexDirection}
`;

const Fader = props => (
  <Wrapper
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
    activeStyle={{ opacity: 1 }}
    {...props}
  />
);

export { Fader };
