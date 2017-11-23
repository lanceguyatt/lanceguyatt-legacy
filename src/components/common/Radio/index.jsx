import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import unSelected from './unselected.svg';
import selected from './selected.svg';

const Wrapper = styled.input`
  appearance: none;
  background: no-repeat url(${unSelected}) center center;
  width: 18px;
  height: 17px;
  outline: 0;

  &:checked {
    background-image: url(${selected});
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
