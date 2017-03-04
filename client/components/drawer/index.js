import React from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';
import List from '../../components/list/';

import styles from './style.css';

class Drawer extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.drawer}>
        <Head data={data} />
        <Window close={data.parent} zoom depth titlebar={data.name}>
          <List data={data.items} wrap />
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

Drawer.defaultProps = {
  route: {
    data: {},
  },
};

export default Drawer;
