import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { size } from 'polished';
import styled from 'styled-components';

import imageUnSelected from './radio_unselected.svg';
import imageSelected from './radio_selected.svg';

const Wrapper = styled.input`
  background-image: url(${imageUnSelected});
  ${size('18px', '17px')};

  &:checked {
    background-image: url(${imageSelected});
  }
`;

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { id, name, value } = this.props;

    return (
      <Wrapper
        type={'radio'}
        id={id}
        name={name}
        value={value}
        onClick={this.handleClick}
        checked={this.state.checked}
      />
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Radio.defaultProps = {
  id: '',
  name: '',
  value: '',
};

export { Radio };