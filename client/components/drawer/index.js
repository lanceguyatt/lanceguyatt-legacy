import React from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Directory from '../../components/directory/';

import styles from './style.css';

class Drawer extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.drawer}>
        <Head data={data} />
        <Window data={data}>
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

export default Drawer;
