import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Gadget = ({ name }) => {
  const className = cx('c-gadget', `c-gadget--${name}`);

  return (
    <button className={className} />
  );
};

Gadget.propTypes = {
  name: React.PropTypes.string,
};

export default Gadget;
