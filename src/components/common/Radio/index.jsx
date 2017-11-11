import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { size } from 'polished';
import { space } from 'styled-system';
import styled from 'styled-components';

import unSelected from './unselected.svg';
import selected from './selected.svg';

const Wrapper = styled.input`
  appearance: none;
  background-image: url(${unSelected});
  ${size('18px', '17px')};
  ${space};
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
