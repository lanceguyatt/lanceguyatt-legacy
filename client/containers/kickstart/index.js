import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import Head from '../../components/head/';
import Icon from '../../components/icon/';

import styles from './style.css';

import tick from './tick@2x.png';

const cx = classnames.bind(styles);

const KickStart = ({ data }) => (
  <div className={`${cx('c-kickstart')}`}>
    <Head data={data} />
    <div className={`${cx('c-copyright')}`}>
      <Link to="/">
        <img src={tick} width="165" height="150" className="u-block" alt="" />
        <h2>2.0 Roms (37.350)</h2>
        <h1>Lance Guyatt, Inc.</h1>
        <h3>Copyright 2000-2017</h3>
        <h4>All Rights Reserved.</h4>
      </Link>
    </div>

    <div className={`${cx('c-load')}`}>
      <Link to="/">
        <Icon name="disk-drive" />
        <div className={`${cx('disk')}`}>
          <Icon name="floppy-disk" />
        </div>
      </Link>
    </div>
  </div>
);

KickStart.propTypes = {
  data: React.PropTypes.shape(),
};

export default KickStart;
