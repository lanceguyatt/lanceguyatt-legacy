import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { theme } from 'styled-system';
// import { borderWidth } from 'polished';

import { Box, Close, Flex } from '../common';

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
        flexDirection="column"
        bg="secondary"
        minHeight="min-content"
        style={{ overflow: 'hidden' }}
        borderWidth={1}
      >
        <Flex
          bg={this.state.active ? 'primary' : 'secondary'}
          align="center"
          borderWidth={1}
          borderBottom
          borderColor="dark"
          height="22px"
        >
          {close ? <Close url={close} /> : null}
          <Bar mx="2px" flex={1}>{name}</Bar>
        </Flex>

        <Main
          borderColor="light"
          borderTop
          borderLeft
          borderWidth={1}
          flex={1}
          p={2}
        >
          {children}
        </Main>
      </Flex>
    );
  }
}
