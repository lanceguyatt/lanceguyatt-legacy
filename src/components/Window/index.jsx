import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { position } from 'polished';

import { Close } from '../common';
import TitleBar from '../TitleBar';
import { Wrapper, Foo } from './style';


const Header = styled(TitleBar)`
  ${position('absolute', '-29px', '-55px', null, '-21px')};
  padding: 0 5px 0 24px;
`;

const WindowClose = styled(Close)`
  ${position('absolute', '-2px', null, null, '0')};
`;

export default class Window extends Component {
  static propTypes = {
    item: PropTypes.shape(),
    children: PropTypes.shape(),
    flex: PropTypes.string,
  };

  static defaultProps = {
    item: '',
    children: '',
    flex: '',
  };

  state = {
    active: false,
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  render() {
    const { item, children, flex } = this.props;
    return (
      <Wrapper flex={flex} active={this.state.active} {...this.props}>
        <Header>
          {item.name}
        </Header>
        <Foo>{children}</Foo>
      </Wrapper>
    );
  }
}
