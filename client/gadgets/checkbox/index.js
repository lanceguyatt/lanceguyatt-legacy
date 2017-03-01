import React from 'react';
import CSSModules from 'react-css-modules';

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
      <div styleName="checkbox">
        <label htmlFor={id} styleName="checkbox__label">
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={this.state.checked}
            styleName="checkbox__input"
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

export default CSSModules(Checkbox, styles, { allowMultiple: true });
