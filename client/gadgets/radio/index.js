import React from 'react';

import styles from './style.css';

class Radio extends React.Component {

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

Radio.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.string,
};

Radio.defaultProps = {
  id: '',
  name: '',
  value: '',
  label: '',
  checked: '',
};

export default Radio;
