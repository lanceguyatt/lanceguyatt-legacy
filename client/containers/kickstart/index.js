import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import Head from '../../components/head/';
// import Svg from '../../components/svg';

import styles from './style.css';

// import diskDrive from '../../assets/images/icons/disk-drive.svg';
import tick from '../../assets/images/tick@2x.png';

const cx = classnames.bind(styles);

const KickStart = ({ data }) => (
  <div className={`${cx('c-kickstart')}`}>
    <Head data={data} />
    <div className={`${cx('c-copyright')}`}>
      <Link to="/">
        <img
          src={tick}
          width="165"
          height="150"
          className="u-block"
          alt=""
        />
        <h2>2.0 Roms (37.350)</h2>
        <h1>Lance Guyatt, Inc.</h1>
        <h3>Copyright  2000-2017</h3>
        <h4>All Rights Reserved</h4>
      </Link>
    </div>

    <div className={`${cx('c-load')}`}>
      <div className={`${cx('disk')}`} />
    </div>
  </div>
);

KickStart.propTypes = {
  data: React.PropTypes.shape(),
};

export default KickStart;
