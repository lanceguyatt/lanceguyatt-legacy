import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import window3 from './window-3.svg';

import {
  Box,
  Close,
  Depth,
  Flex,
  Zoom,
} from '../common';

const Wrapper = styled(({
  close,
  data,
  ...props
}) => <Flex {...props} />)`
  overflow: hidden;
`;

const Main = Flex.extend.attrs({
  flex: 1,
  borderTop: 28,
  borderRight: 54,
  borderBottom: 70,
  borderLeft: 5,
})`
  border-image: url(${window3}) 28 54 70 5 stretch;

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
        bg={this.state.active ? 'primary' : 'secondary'}
        borderTop={2}
        flex={1}
        borderColor="light"
        flexDirection="column"
        minHeight="min-content"
        {...this.props}
      >
        <Flex
          alignItems="center"
          borderBottom={2}
          borderColor="dark"
          height={20}
        >
          {close ? <Close url={close} /> : null}
          <Bar mx={1} flex={1}>{name}</Bar>
          <Zoom title="Zoom!!!" />
          <Depth />
        </Flex>

        <Main>
          <Flex
            bg="secondary"
            flex={1}
          >
            {children}
          </Flex>
        </Main>
      </Wrapper>
    );
  }
}
