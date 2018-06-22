import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';

export default function Fader(props) {
  return (
    <CSSTransition
      {...props}
      defaultStyle={{ opacity: 0 }}
      enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
      leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
      activeStyle={{ opacity: 1 }}
    />
  );
}
