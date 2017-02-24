/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames/bind';
import moment from 'moment';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory';
import Button from '../../components/button';

import styles from './style.css';

import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

const cx = classnames.bind(styles);

class WorkBench extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    const className = cx('c-workbench');

    return (
      <div className={className}>
        <Head data={data} />
        <Titlebar>Copyright &copy; 2000-{copyrightYear} {site.name}. All Rights Reserved</Titlebar>
        <Window data={data} cssClasses="c-window--full">
          <Directory data={data.items} cssClasses="c-directory--column" />
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

export default WorkBench;
