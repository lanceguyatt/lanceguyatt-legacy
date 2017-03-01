import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import Head from '../../components/head/';

import styles from './style.css';

class KickStart extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div styleName="kickstart">
        <Head data={data} />
        <div styleName="copyright">
          <Link to="/">
            <div styleName="tick" />
            <p>
              2.0 Roms (37.350)
              <br />
              Copyright &copy; 2000-2017
              <br />
              Lance Guyatt, Inc.
              <br />
              All Rights Reserved
            </p>
          </Link>
        </div>

        <Link to="/" styleName="group">
          <div styleName="disk-drive" />
          <div styleName="floppy-disk" />
        </Link>
      </div>
    );
  }
}

KickStart.propTypes = {
  route: React.PropTypes.shape(),
};

export default CSSModules(KickStart, styles);
