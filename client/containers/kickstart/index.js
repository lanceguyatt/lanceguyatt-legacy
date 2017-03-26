import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Fader from '../../components/fader/';
import Head from '../../components/head/';

import site from '../../../data/site/';
import author from '../../../data/author/';

import styles from './style.css';

export default class KickStart extends Component {

  static propTypes = {
    route: PropTypes.shape(),
  };

  static defaultProps = {
    route: {},
  };

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <Fader
        className={styles.kickstart}
        transitionAppear
        active
      >

        <Head data={data} />

        <div className={styles.copyright}>
          <Link to="/">
            <div className={styles.tick} />
            <p>
              2.0 Roms (37.350)
              <br />
              Copyright &copy; {site.dateCreated.substr(0, 4)}-{site.copyrightYear}
              <br />
              {author.name.givenName} {author.name.familyName}, Inc.
              <br />
              All Rights Reserved
            </p>
          </Link>
        </div>

        <Link to="/" className={styles.group}>
          <div className={styles.diskDrive} />
          <div className={styles.floppyDisk} />
        </Link>
      </Fader>
    );
  }
}
