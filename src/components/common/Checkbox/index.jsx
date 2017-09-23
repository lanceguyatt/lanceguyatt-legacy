import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import unSelected from './checkbox-unselected.svg';
import selected from './checkbox-selected.svg';

const Wrapper = styled.input`
  appearance: none;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  background-image: ${props => props.checked ? `url(${selected})` : `url(${unSelected})`};
  ${size('22px', '26px')};

  &:focus {
    outline: 0;
  }
`;

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    id: '',
    name: '',
  };

  state = {
    checked: false,
  };

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { id, name } = this.props;
    return (
      <Wrapper
        type={'checkbox'}
        id={id}
        name={name}
        checked={this.state.checked}
        onChange={() => { this.handleChange(); }}
      />
    );
  }
}

export { Checkbox };
