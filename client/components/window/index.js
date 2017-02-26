import React from 'react';
import classnames from 'classnames/bind';

import IconLink from '../../components/icon_link/';

import styles from './style.css';

const cx = classnames.bind(styles);

const Window = ({ data, children, cssClasses }) => {
  const className = cx('c-window', cssClasses);

  return (
    <div className={className}>
      <div className={`${cx('c-window__header')}`}>
        <IconLink url={data.parent} name="" icon="close" />
        <div className={`${cx('c-window__header__name')}`}>
          {data.name} {data.memory.full} full, {data.memory.free} free, {data.memory.use}
        </div>
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
    memory: React.PropTypes.shape(),
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
