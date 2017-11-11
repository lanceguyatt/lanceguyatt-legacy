import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export default class Text extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'email']),
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    type: '',
    id: '',
    name: '',
    label: '',
    value: '',
    placeholder: '',
  };

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
    const {
      label, type, id, name, placeholder,
    } = this.props;
    return (
      <div className={styles.text}>
        <label htmlFor={id} className={styles.textLabel}>{label}
          <input
            type={type}
            id={id}
            name={name}
            className={styles.textInput}
            value={this.state.value}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
