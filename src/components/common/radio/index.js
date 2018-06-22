import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export default class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.string,
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
      isSelected: false,
    };
  }

  render() {
    const { id, name, value, label, checked } = this.props;

    return (
      <div className={styles.radio}>
        <label htmlFor={id} className={styles.radioLabel}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            className={styles.radioInput}
          />
          {label}
        </label>
      </div>
    );
  }
}
