import React from 'react';

import Titlebar from '../../components/titlebar/';

import styles from './styles.css';

const Requester = ({ name, children }) => (
  <div className={styles.requester}>
    <Titlebar window>{name}</Titlebar>
    {children}
  </div>
);

Requester.propTypes = {
  name: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Requester;
