import React from 'react';
import classnames from 'classnames/bind';

import Head from '../../components/head/';
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
        <Window data={data}>
          <Directory data={data.items} cssClasses="c-directory--wrap" />
        </Window>
        {this.props.children}
      </section>
    );
  }
}

Folder.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape({
      parent: React.PropTypes.string,
    }),
  }),
  children: React.PropTypes.element,
};

export default Folder;
