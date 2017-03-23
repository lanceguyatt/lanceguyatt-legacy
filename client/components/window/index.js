import React from 'react';

import Titlebar from '../titlebar/';

import Close from '../../gadgets/close';
import Zoom from '../../gadgets/zoom';
import Depth from '../../gadgets/depth';

import styles from './style.css';

class Window extends React.Component {

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
    );
  }
}

Window.propTypes = {
  name: React.PropTypes.string,
  alternateHeadline: React.PropTypes.string,
  close: React.PropTypes.string,
  zoom: React.PropTypes.bool,
  depth: React.PropTypes.bool,
  children: React.PropTypes.node,
};

Window.defaultProps = {
  name: '',
  alternateHeadline: '',
  close: '',
  zoom: false,
  depth: false,
  children: '',
};

export default Window;
