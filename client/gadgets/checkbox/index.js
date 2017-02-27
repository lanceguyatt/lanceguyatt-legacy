import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console('Changed!');
  }

  render() {
    const { name, description, checked } = this.props;

    return (
      <div className={cx('c-checkbox')}>
        <input type="checkBox" name={name} checked={checked} className={cx('c-checkbox__input')} onClick={this.handleChange} />
        <label htmlFor={name} className={cx('c-checkbox__label')}>{description}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  checked: React.PropTypes.string,
};

export default Checkbox;
