import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Head from '../../components/Head';
import Window from '../../components/Window';
import Directory from '../../components/Directory';

import styles from './style.css';

export default class Drawer extends Component {
  static propTypes = {
    route: PropTypes.shape({
      data: PropTypes.shape(),
    }),
    children: PropTypes.node,
  };

  static defaultProps = {
    route: {
      data: {},
    },
    children: '',
  };

  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    const { name, parent } = data;

    return (
      <div className={styles.drawer}>
        <Head data={data} />
        <Window close={parent} name={name} transition depth zoom>
          {data.items ? <Directory items={data.items} wrap /> : null}
        </Window>
        {this.props.children}
      </div>
    );
  }
}
