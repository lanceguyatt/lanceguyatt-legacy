import React from 'react';

import styles from './style.css';

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
    const { label, type, id, name, placeholder } = this.props;

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

Text.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email']),
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

Text.defaultProps = {
  type: '',
  id: '',
  name: '',
  label: '',
  value: '',
  placeholder: '',
};

export default Text;
