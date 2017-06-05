/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Fader from '../../components/fader/';
import Head from '../../components/head/';

import workbench from '../../../data/workbench/';
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

  componentDidMount() {
    document.body.className = '';
    document.body.classList.add('u-bg-purple');
  }

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
          <Link to={workbench.url}>
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

        <Link to={workbench.url} className={styles.group}>
          <div className={styles.diskDrive} />
          <div className={styles.floppyDisk} />
        </Link>
      </Fader>
    );
  }
}
