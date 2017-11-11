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
  background-image: url(${unSelected});
  ${size('22px', '26px')};

  &:checked {
    background-image: url(${selected});
  }

  &:focus {
    outline: 0;
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
