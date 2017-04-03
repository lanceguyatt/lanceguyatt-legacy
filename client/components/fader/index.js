import React from 'react';
import { CSSTransition, transit } from 'react-css-transition';

// import styles from './style.css';

const Fader = props => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1, 300, 'ease-in-out') }}
    leaveStyle={{ opacity: transit(0, 300, 'ease-in-out') }}
    activeStyle={{ opacity: 1 }}
  />
);

export default Fader;

// defaultClassName={styles.default}
// enterClassName={styles.enter}
// leaveClassName={styles.leave}
// activeClassName={styles.active}
