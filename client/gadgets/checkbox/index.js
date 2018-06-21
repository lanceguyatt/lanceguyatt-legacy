import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    id: '',
    name: '',
    value: '',
    label: '',
    checked: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handleChange(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  render() {
    const { id, name, value, label } = this.props;

    return (
      <div className={styles.checkbox}>
        <label htmlFor={id} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={this.state.checked}
            className={styles.checkboxInput}
            onChange={this.handleChange}
          />
          {label}
        </label>
      </div>
    );
  }
}
