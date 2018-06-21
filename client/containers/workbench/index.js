/* eslint no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Fader from '../../components/fader/';
import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory/';

import styles from './style.css';

import site from '../../../data/site/';
import kickstart from '../../../data/kickstart/';

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

    return (
      <Fader className={styles.guruMeditation} transitionAppear active>
        <Head data={data} />

        <Titlebar
          name={`${site.name}. Copyright © ${site.dateCreated.substr(0, 4)}-${
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
