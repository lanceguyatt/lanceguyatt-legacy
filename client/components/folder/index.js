import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import Head from '../../components/head/';
import Titlebar from '../../components/titlebar/';
import Window from '../../components/window/';
import Directory from '../../components/directory/';

import styles from './style.css';

const cx = classnames.bind(styles);

class Folder extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    const className = cx('c-folder');

    return (
      <section className={className}>
        <Head data={data} />
        <Window name={data.name} parent={data.parent}>
          <Directory data={data.items} />
          {this.props.children}
        </Window>
      </section>
    );
  }
}

Folder.propTypes = {
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
        type: React.PropTypes.string,
      })),
    }),
  }),
  children: React.PropTypes.element,
};

export default Folder;
