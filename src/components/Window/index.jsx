import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box,
  Close,
  Depth,
  Flex,
  Zoom,
} from '../common';

const Wrapper = Flex.extend`
  overflow: hidden;
`;

const Main = styled(Flex)`
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Bar = Box.extend.attrs({
  lineHeight: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

export default class Window extends Component {
  static propTypes = {
    data: PropTypes.shape(),
    children: PropTypes.node,
  };

  static defaultProps = {
    data: {
      name: 'Window name',
    },
    children: '',
  };

  state = {
    active: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }

  componentWillUnount() {
    this.setState({ active: false });
  }

  render() {
    const { data, children, close } = this.props;
    const { name } = data;
    return (
      <Wrapper
        bg="secondary"
        borderTop={2}
        borderColor="light"
        flexDirection="column"
        minHeight="min-content"
        {...this.props}
      >
        <Flex
          bg={this.state.active ? 'primary' : 'secondary'}
          alignItems="center"
          borderBottom={2}
          borderColor="dark"
          height={20}
        >
          {close ? <Close url={close} /> : null}
          <Bar mx={1} flex={1}>{name}</Bar>
          <Zoom />
          <Depth />
        </Flex>

        <Main flex={1}>
          {children}
        </Main>
      </Wrapper>
    );
  }
}
