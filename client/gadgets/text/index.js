import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

class Text extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { id, name, placeholder } = this.props;

    return (
      <input
        type="text"
        id={id}
        name={name}
        className={cx('c-text')}
        value={this.state.value}
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
