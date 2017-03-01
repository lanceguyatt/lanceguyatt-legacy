import React from 'react';
import CSSModules from 'react-css-modules';

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
      <div styleName="radio">
        <label htmlFor={id} styleName="radio__label">
          <input type="radio" id={id} name={name} value={value} checked={checked} styleName="radio__input" />
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

export default CSSModules(Radio, styles, { allowMultiple: true });
