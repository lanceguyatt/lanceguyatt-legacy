/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import List from '../../components/list/';

import styles from './style.css';

import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

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

  componentDidUnmount() {
    this.setState({ active: true });
  }

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.workbench}>

        <Head data={data} />

        <Titlebar titlebar={`${site.name}. Copyright &copy; 2000-${copyrightYear}. All Rights Reserved`} depth />

        <Window close="/kickstart/" titlebar={data.name}>
          <List data={data.items} />
        </Window>

        {this.props.children}

      </div>
    );
  }
}

WorkBench.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape({
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      url: React.PropTypes.string,
      image: React.PropTypes.string,
      items: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        url: React.PropTypes.string,
      })),
    }),
  }),
  children: React.PropTypes.element,
};

WorkBench.defaultProps = {
  route: {},
  children: null,
};

export default WorkBench;
