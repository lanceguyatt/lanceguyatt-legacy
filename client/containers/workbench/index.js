import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory/';

import styles from './style.css';
import transitions from '../../styles/transitions/index.css';

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
      <ReactCSSTransitionGroup
        transitionAppear
        transitionName={transitions}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <Head data={data} />
        <Titlebar name={`${site.name}. Copyright © ${site.dateCreated.substr(0, 4)}-${site.copyrightYear}. All Rights Reserved`} />
        <Window close="/kickstart/" name={data.name} alternateHeadline={data.alternateHeadline}>
          <Directory items={data.items} />
        </Window>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}
