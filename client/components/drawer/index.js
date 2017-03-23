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
        <Window close={data.parent} zoom depth name={data.name}>
          {data.items ? <Directory items={data.items} wrap /> : null}
        </Window>
        {this.props.children}
      </div>
    );
  }
}

Drawer.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape(),
  }),
  children: React.PropTypes.node,
};

Drawer.defaultProps = {
  route: {
    data: {},
  },
  children: '',
};

export default Drawer;
