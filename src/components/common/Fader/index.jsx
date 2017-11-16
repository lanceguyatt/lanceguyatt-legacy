import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, transit } from 'react-css-transition';

const Fader = props => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
    activeStyle={{ opacity: 1 }}
  />
);

Fader.propTypes = {
  children: PropTypes.shape(),
};

Fader.defaultProps = {
  children: ''
};

export { Fader };
