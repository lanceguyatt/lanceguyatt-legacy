/* eslint: import/no-extraneous-dependencie: 0 */
import React from 'react';

import Head from '../../components/head/';

import styles from './style.css';

const view = {
  name: 'Start',
  url: '/',
};

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  componentWillUnmount() {
    this.setState({ active: false });
  }

  render() {
    return (
      <div className={styles.workbench}>
        <Head view={view} />
        <h1>{view.name}</h1>
      </div>
    );
  }
}

export default Start;
