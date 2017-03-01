import React from 'react';
import CSSModules from 'react-css-modules';

import Gadget from '../../components/gadget/';

import styles from './style.css';

class Window extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  componentWillUnMount() {
    this.setState({ active: false });
  }

  render() {
    const { children, cssClasses, data } = this.props;
    const activeClass = this.state.active ? 'window--active' : '';

    return (
      <div styleName={`window ${cssClasses} ${activeClass}`}>
        <div styleName="window__header">
          <Gadget name="close" />
          <div styleName="window__header__name">
            { /* {data.name}
            {data.memory.full} full, {data.memory.free} free, {data.memory.use} */ }
            {data.name}
          </div>
          <Gadget name="zoom" />
          <Gadget name="depth" />
        </div>
        <div styleName="window__main">
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
  cssClasses: React.PropTypes.string,
};

Window.defaultTypes = {
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

export default CSSModules(Window, styles, { allowMultiple: true });
