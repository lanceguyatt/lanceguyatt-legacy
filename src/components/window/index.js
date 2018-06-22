/* eslint no-console: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Fader from '../Fader';
import Titlebar from '../Titlebar';

import { Close, Depth, Zoom } from '../common';

import styles from './style.css';

export default class Window extends Component {
  static propTypes = {
    name: PropTypes.string,
    alternateHeadline: PropTypes.string,
    close: PropTypes.string,
    zoom: PropTypes.bool,
    depth: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    name: '',
    alternateHeadline: '',
    close: '',
    zoom: false,
    depth: false,
    children: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      select: false,
      zoom: false,
      depth: false,
    };
    this.toggleZoom = this.toggleZoom.bind(this);
    this.toggleDepth = this.toggleDepth.bind(this);
  }

  componentWillMount() {
    this.setState({ select: true });
  }

  componentWillUnmount() {
    this.setState({ select: false });
  }

  toggleZoom() {
    this.setState({ zoom: !this.state.zoom });
  }

  toggleDepth() {
    this.setState({ depth: !this.state.depth });
  }

  render() {
    const {
      name,
      alternateHeadline,
      children,
      close,
      zoom,
      depth,
    } = this.props;

    return (
      <Fader transitionAppear active>
        <div
          className={
            this.state.select ? styles.windowSelected : styles.windowUnSelected
          }
        >
          <div className={styles.windowHeader}>
            {close ? <Close url={close} /> : null}
            <Titlebar
              isWindow
              name={name}
              alternateHeadline={alternateHeadline}
            />
            {zoom ? <Zoom action={this.toggleZoom} /> : null}
            {depth ? <Depth action={this.toggleDepth} /> : null}
          </div>
          <div className={styles.windowMain}>
            <div className={styles.windowMainInner}>{children}</div>
          </div>
        </div>
      </Fader>
    );
  }
}
