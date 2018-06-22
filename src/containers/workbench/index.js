/* eslint no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Fader from '../../components/Fader';
import Head from '../../components/Head';
import Window from '../../components/Window';
import Titlebar from '../../components/Titlebar';
import Directory from '../../components/Directory';

import styles from './style.css';

import site from '../../../data/site';
import kickstart from '../../../data/kickstart';

export default class WorkBench extends Component {
  static propTypes = {
    route: PropTypes.shape(),
    children: PropTypes.node,
  };

  static defaultProps = {
    route: {},
    children: null,
  };

  componentDidMount() {
    document.body.className = '';
    document.body.classList.add('u-bg-gray');
  }

  render() {
    const { data } = this.props.route;
    const copyrightYear = site.dateCreated.substr(0, 4);

    return (
      <Fader className={styles.guruMeditation} transitionAppear active>
        <Head data={data} />

        <Titlebar
          name={`${site.name}. Copyright © ${copyrightYear}-${
            site.copyrightYear
          }. All Rights Reserved`}
        />

        <Window
          close={kickstart.url}
          name={data.name}
          alternateHeadline={data.alternateHeadline}
          depth
          zoom
        >
          <Directory items={data.items} />
        </Window>
        {this.props.children}
      </Fader>
    );
  }
}
