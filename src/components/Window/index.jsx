import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { theme } from 'styled-system';
// import { borderWidth } from 'polished';

import {
  Box,
  Close,
  Depth,
  Flex,
  Zoom,
} from '../common';

const Main = styled(Flex)`
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Bar = styled(Box)`
  line-height: 1.125;
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
      <Flex
        {...this.props}
        bg="secondary"
        borderWidth={2}
        borderTop
        borderColor="light"
        flexDirection="column"
        minHeight="min-content"
        style={{ overflow: 'hidden' }}
      >
        <Flex
          bg={this.state.active ? 'primary' : 'secondary'}
          align="center"
          borderWidth={2}
          borderBottom
          borderColor="dark"
          height="20px"
        >
          {close ? <Close url={close} /> : null}
          <Bar mx={1} flex={1}>{name}</Bar>
          <Zoom />
          <Depth />
        </Flex>

        <Main flex={1}>
          {children}
        </Main>
      </Flex>
    );
  }
}
