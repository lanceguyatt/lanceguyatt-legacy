import React from 'react';
import CSSModules from 'react-css-modules';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Directory from '../../components/directory/';

import styles from './style.css';

class Drawer extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div styleName="drawer">
        <Head data={data} />
        <Window data={data} cssClasses="window--2">
          <Directory directory={data.items} wrap />
        </Window>
      </div>
    );
  }
}

Drawer.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape(),
  }),
};

export default CSSModules(Drawer, styles);
