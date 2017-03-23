/* eslint: import/no-extraneous-dependencie: 0 */
import React from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory/';

import styles from './style.css';

import site from '../../../data/site/';

class WorkBench extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  componentWillUnmount() {
    this.setState({ active: false });
  }

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.workbench}>
        <Head data={data} />
        <Titlebar name={`${site.name}. Copyright © 2000-${site.copyrightYear}. All Rights Reserved`} />
        <Window close="/kickstart/" name={data.name} alternateHeadline={data.alternateHeadline} zoom depth>
          <Directory items={data.items} />
        </Window>
        {this.props.children}
      </div>
    );
  }
}

WorkBench.propTypes = {
  route: React.PropTypes.shape(),
  children: React.PropTypes.node,
};

WorkBench.defaultProps = {
  route: {},
  children: null,
};

export default WorkBench;
