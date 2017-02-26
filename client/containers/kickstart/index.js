import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import Head from '../../components/head/';

import styles from './style.css';

const cx = classnames.bind(styles);

class KickStart extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={`${cx('c-kickstart')}`}>
        <Head data={data} />
        <div className={`${cx('c-copyright')}`}>
          <Link to="/">
            <div className={`${cx('c-tick')}`} />
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

        <Link to="/" className={`${cx('c-group')}`}>
          <div className={`${cx('c-disk-drive')}`} />
          <div className={`${cx('c-floppy-disk')}`} />
        </Link>
      </div>
    );
  }
}

KickStart.propTypes = {
  route: React.PropTypes.shape(),
};

export default KickStart;
