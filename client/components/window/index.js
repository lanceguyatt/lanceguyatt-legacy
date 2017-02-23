import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames/bind';

import Icon from '../../components/icon/';

import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ data, children, cssClasses }) => {
  const className = cx('c-window', cssClasses);

  return (
    <div className={className}>
      <div className={`${cx('c-window__header')}`}>
        <Link to={data.parent}><Icon name="close" /></Link>
        {data.name} {data.memory.full} full, {data.memory.free} free, {data.memory.use} in use
      </div>
      <div className={`${cx('c-window__main')}`}>
        {children}
      </div>
    </div>
  );
};

Window.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    parent: React.PropTypes.string,
    memory: React.PropTypes.shape({
    }),
  }),
  children: React.PropTypes.node,
  cssClasses: React.PropTypes.string,
};

Window.defaultTypes = {
  data: {
    name: '',
    parent: '',
    memory: {
      full: '',
    },
  },
  children: '',
  cssClasses: '',
};

export default Window;
