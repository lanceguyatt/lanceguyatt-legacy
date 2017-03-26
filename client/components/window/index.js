import React, { Component, PropTypes } from 'react';

import Fader from '../fader/';
import Titlebar from '../titlebar/';

import Close from '../../gadgets/close';
import Zoom from '../../gadgets/zoom';
import Depth from '../../gadgets/depth';

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
      isSelected: false,
    };
    this.handleZoom = this.handleZoom.bind(this);
    this.handleDepth = this.handleDepth.bind(this);
  }

  componentWillMount() {
    this.setState({ isSelected: true });
  }

  componentWillUnMount() {
    this.setState({ isSelected: false });
  }

  handleZoom() {
    this.setState({ isZoom: false });
  }

  handleDepth() {
    this.setState({ isSelected: false });
  }

  render() {
    const { name, alternateHeadline, children, close, zoom, depth } = this.props;

    const className = this.state.isSelected ? styles.windowSelected : styles.windowUnselected;

    return (
      <Fader transitionAppear active>
        <div className={className}>
          <div className={styles.windowHeader}>
            {close ? <Close url={close} /> : null}
            <Titlebar isWindow name={name} alternateHeadline={alternateHeadline} />
            {zoom ? <Zoom foo={this.handleZoom} /> : null}
            {depth ? <Depth handleClick={this.handleDepth} /> : null}
          </div>
          <div className={styles.windowMain}>
            <div className={styles.windowMainInner}>
              {children}
            </div>
          </div>
        </div>
      </Fader>
    );
  }
}
