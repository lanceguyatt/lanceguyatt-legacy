import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import selected from './selected.svg';
import unSelected from './unselected.svg';

const Wrapper = styled.input`
  appearance: none;
  background: transparent url(${unSelected}) no-repeat center center;
  height: 22px;
  width: 26px;
  outline: 0;

  &:checked {
    background-image: url(${selected});
  }
`;

export class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    id: '',
    name: '',
  };

  render() {
    const { id, name } = this.props;
    return (
      <Wrapper
        type="checkbox"
        id={id}
        name={name}
      />
    );
  }
}
