import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import Head from '../../components/head/';

import styles from './style.css';
import logo from './logo.png';
import diskDrive from './disk_drive.svg';
import floppyDisk from './floppy_disk.svg';


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
            <img src={logo} width="165" height="150" className="u-block" alt="" />
            <h2>2.05 Roms (37.350)</h2>
            <h1>Lance Guyatt, Inc.</h1>
            <h3>Copyright 2000-2017</h3>
            <h4>All Rights Reserved.</h4>
          </Link>
        </div>

        <Link to="/" className={`${cx('c-group')}`}>
          <img src={diskDrive} alt="syDisk" className={`${cx('c-disk-drive')}`} />
          <img src={floppyDisk} alt="floppyDisk" className={`${cx('c-floppy-disk')}`} />
        </Link>
      </div>
    );
  }
}

KickStart.propTypes = {
  route: React.PropTypes.shape(),
};

export default KickStart;
