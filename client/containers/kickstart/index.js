import React from 'react';
import { Link } from 'react-router';

import Head from '../../components/head/';

import styles from './style.css';

class KickStart extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.kickstart}>
        <Head data={data} />
        <div className={styles.copyright}>
          <Link to="/">
            <div className={styles.tick} />
            <p>
              2.0 Roms (37.350)
              <br />
              Copyright &copy; 2000-2017
              <br />
              Lance Guyatt, Inc.
              <br />
              All Rights Reserved
            </p>
          </Link>
        </div>

        <Link to="/" className={styles.group}>
          <div className={styles.diskDrive} />
          <div className={styles.floppyDisk} />
        </Link>
      </div>
    );
  }
}

KickStart.propTypes = {
  route: React.PropTypes.shape(),
};

export default KickStart;
