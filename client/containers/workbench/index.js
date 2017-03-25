/* eslint import/no-extraneous-dependencies: 0 */
import React, { Component, PropTypes } from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory/';

import styles from './style.css';

import site from '../../../data/site/';

export default class WorkBench extends Component {
  static propTypes = {
    route: PropTypes.shape(),
    children: PropTypes.node,
  };

  static defaultProps = {
    route: {},
    children: null,
  };

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.workbench}>
        <Head data={data} />
        <Titlebar name={`${site.name}. Copyright © ${site.dateCreated.substr(0, 4)}-${site.copyrightYear}. All Rights Reserved`} />
        <Window close="/kickstart/" name={data.name} alternateHeadline={data.alternateHeadline} zoom depth>
          <Directory items={data.items} />
        </Window>
        {this.props.children}
      </div>
    );
  }
}
