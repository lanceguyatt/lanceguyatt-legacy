import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

const Wrapper = styled.input`
  background-image: url(${require('./checkbox_unselected.svg')});
  ${size('22px', '26px')};

  &:checked {
    background-image: url(${require('./checkbox_selected.svg')});
  }
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { id, name, value } = this.props;
    return (
      <Wrapper
        type={'checkbox'}
        id={id}
        name={name}
        value={value}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  id: '',
  name: '',
  value: '',
};

export { Checkbox };
