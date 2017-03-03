import React from 'react';

import Titlebar from '../titlebar/';
// import Close from '../../gadgets/close';

import styles from './style.css';

class Window extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  componentWillMount() {
    this.setState({ isSelected: true });
  }

  componentWillUnMount() {
    this.setState({ isSelected: false });
  }

  render() {
    const { children, data } = this.props;

    const className = this.state.isSelected ? styles.windowSelected : styles.windowUnselected;

    return (
      <div className={className}>
        <Titlebar window>{data.name}</Titlebar>
        <div className={styles.windowMain}>
          {children}
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    parent: React.PropTypes.string,
    memory: React.PropTypes.shape(),
  }),
  children: React.PropTypes.node,
};

Window.defaultProps = {
  data: {
    name: '',
    parent: '',
    memory: {
      full: '',
    },
  },
  children: '',
  cssClasses: '',
};

export default Window;
