/* eslint: import/no-extraneous-dependencie: 0 */
import React from 'react';

import Head from '../../components/head/';

import styles from './style.css';

const view = {
  name: 'Home',
  url: '/',
};

class Home extends React.Component {
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
      <div className={styles.home}>
        <Head view={view} />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
