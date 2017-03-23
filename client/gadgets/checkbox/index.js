import React from 'react';

import styles from './style.css';

class Checkbox extends React.Component {

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

Checkbox.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
};

Checkbox.defaultProps = {
  id: '',
  name: '',
  value: '',
  label: '',
  checked: '',
};

export default Checkbox;
