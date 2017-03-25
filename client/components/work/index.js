import React, { Component, PropTypes } from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';

import Action from '../../gadgets/action/';

import styles from './style.css';

export default class Work extends Component {

  static propTypes = {
    route: PropTypes.shape({
      data: PropTypes.shape(),
    }),
  };

  static defaultProps = {
    route: {
      data: {},
    },
  };

  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    return (
      <div className={styles.work}>
        <Head data={data} />
        <Window close={data.parent} zoom depth name={data.name}>
          <Action name="Launch" url="http://awin.com" />
        </Window>
      </div>
    );
  }
}
