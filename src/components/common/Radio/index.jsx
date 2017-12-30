import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import radio from './radio.svg';

const Wrapper = styled.input`
  appearance: none;
  background-color: transparent;
  background-image: url(${radio});
  width: 18px;
  height: 17px;
  outline: 0;

  &:checked {
    background-position: -17px 0;
  }
`;

export class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    id: '',
    name: '',
    value: '',
  };

  render() {
    const { id, name, value } = this.props;

    return (
      <Wrapper
        type="radio"
        id={id}
        name={name}
        value={value}
        {...this.props}
      />
    );
  }
}
