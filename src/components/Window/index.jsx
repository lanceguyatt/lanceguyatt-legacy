import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-system';
import { borderWidth } from 'polished';

import { Box, Close, Flex } from '../common';

const Wrapper = styled(({ item, close, ...rest }) => <Flex {...rest} />).attrs({
  bg: 'secondary',
})`
  min-height: min-content;
`;

const Head = styled(Flex)`
  height: 22px;
  ${borderWidth(null, theme('borderWidths.0'))}
`;

const Main = styled(Flex)`
  border-right: 1px solid ${theme('colors.dark')};
  border-left: 1px solid ${theme('colors.light')};
  overflow: scroll;
  min-height: min-content;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

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
    item: PropTypes.shape(),
    children: PropTypes.node,
  };

  static defaultProps = {
    item: {
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
    const { item, children, close } = this.props;
    const { name } = item;
    return (
      <Wrapper
        {...this.props}
        item={item}
        flexDirection="column"
        borderWidth={1}
        borderTop
        borderColor="light"
      >
        <Head
          bg={this.state.active ? 'primary' : 'secondary'}
          align="center"
          borderWidth={1}
          borderBottom
        >
          {close ? <Close url={close} /> : null}
          <Bar mx="2px" bg="danger" flex={1}>{name}</Bar>
          <Close url={close} />
        </Head>
        <Main
          bg="secondary"
          flexDirection="column"
          flex={1}
          p={2}
        >
          {children}
        </Main>
      </Wrapper>
    );
  }
}
