import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

class Radio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  render() {
    const { name, description, checked } = this.props;

    return (
      <div className={cx('c-radio')}>
        <input type="checkBox" name={name} checked={checked} className={cx('c-radio__input')} />
        <label htmlFor={name} className={cx('c-radio__label')}>{description}</label>
      </div>
    );
  }
}

Radio.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  checked: React.PropTypes.string,
};

export default Radio;
