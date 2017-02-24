import React from 'react';
import classnames from 'classnames/bind';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Directory from '../../components/directory/';

import styles from './style.css';

const cx = classnames.bind(styles);

class Drawer extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    const className = cx('c-drawer');

    return (
      <div className={className}>
        <Head data={data} />
        <Window data={data} cssClasses="c-window--drawer">
          <Directory data={data.items} cssClasses="c-directory--wrap" />
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
  children: React.PropTypes.element,
};

export default Drawer;
