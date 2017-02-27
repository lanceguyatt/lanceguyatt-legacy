import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

class Text extends React.Component {
  handleChange() {
  }

  render() {
    const { id, name, value, placeholder } = this.props;

    return (
      <input
        type="text"
        id={id}
        name={name}
        className={cx('c-text')}
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

Text.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

export default Text;
