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
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  componentWillUnount() {
    this.setState({ active: false });
  }

  render() {
    const { item, children, close } = this.props;
    const { name } = item;
    return (
      <Wrapper
        {...this.props}
        item={item}
        bg={this.state.active ? 'primary' : 'secondary'}
      >
        <Header>
          {close ? <WindowClose url={close} /> : null}
          {name}
        </Header>
        <Foo>{children}</Foo>
      </Wrapper>
    );
  }
}

Window.propTypes = {
  item: PropTypes.shape(),
  children: PropTypes.node,
};

Window.defaultProps = {
  item: {
    name: 'Window name',
  },
  children: '',
};
