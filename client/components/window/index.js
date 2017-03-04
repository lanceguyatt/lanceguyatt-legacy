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
  }

  componentWillMount() {
    this.setState({ isSelected: true });
  }

  componentWillUnMount() {
    this.setState({ isSelected: false });
  }

  render() {
    const { children, close, zoom, depth, titlebar } = this.props;

    const className = this.state.isSelected ? styles.windowSelected : styles.windowUnselected;

    return (
      <div className={className}>
        <div className={styles.windowHeader}>
          {close ? <Close url={close} /> : null}
          <Titlebar isWindow titlebar={titlebar} />
          {zoom ? <Zoom /> : null}
          {depth ? <Depth /> : null}
        </div>
        <div className={styles.windowMain}>
          {children}
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  titlebar: React.PropTypes.string,
  close: React.PropTypes.string,
  zoom: React.PropTypes.bool,
  depth: React.PropTypes.bool,
  children: React.PropTypes.node,
};

Window.defaultProps = {
  titlebar: 'Titlebar name',
  close: '',
  zoom: false,
  depth: false,
  children: '',
};

export default Window;
