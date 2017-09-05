import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import unSelected from './checkbox-unselected.svg';
import selected from './checkbox-selected.svg';

const Wrapper = styled.input`
  background-image: url(${unSelected});
  ${size('22px', '26px')};
  margin-right: 5px;

  &:checked {
    background-image: url(${selected});
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
