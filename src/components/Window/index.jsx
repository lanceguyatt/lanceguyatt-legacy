import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { position } from 'polished';

import TitleBar from '../TitleBar';
import Wrapper, { Foo, Bar } from './style';

const Header = styled(TitleBar)`
  ${position('absolute', '-29px', '-55px', null, '-21px')};
  padding: 0 5px;
`;

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  render() {
    const { name } = this.props.item;
    return (
      <Wrapper active={this.state.active} {...this.props}>
        <Header>{name}</Header>
        <Foo>
          <Bar>{this.props.children}</Bar>
        </Foo>
      </Wrapper>
    );
  }
}

Window.propTypes = {
  item: PropTypes.shape(),
  children: PropTypes.shape(),
  flex: PropTypes.string
};

Window.defaultProps = {
  item: {},
  children: '',
  flex: ''
};

export default Window;
