import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-system';
import { borderWidth } from 'polished';

import { Box, Close, Flex } from '../common';

const Wrapper = styled(({
  data,
  close,
  ...rest
}) => <Flex {...rest} />).attrs({
})``;

const Head = styled(Flex).attrs({
})`
  ${borderWidth(null, theme('borderWidths.0'))}
`;

const Main = styled(Flex)`
  overflow: hidden;
  hyphens: auto;
  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;

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
      <Wrapper
        {...this.props}
        data={data}
        flexDirection="column"
        bg="secondary"
        minHeight="min-content"
      >
        <Head
          bg={this.state.active ? 'primary' : 'secondary'}
          align="center"
          borderWidth={1}
          borderBottom
          height="22px"
        >
          {close ? <Close url={close} /> : null}
          <Bar mx="2px" flex={1}>{name}</Bar>
        </Head>

        <Main
          bg="secondary"
          borderWidth={2}
          p={2}
          flex="auto"
        >
          {children}
        </Main>
      </Wrapper>
    );
  }
}
