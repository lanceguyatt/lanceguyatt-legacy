import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { space } from 'styled-system';
import styled, { keyframes } from 'styled-components';

import { Box, Flex, Icon, Fader } from '../../components/common';
import Head from '../../components/Head';
import tick from './tick.png';

const Tick = styled.img`
  ${space}
`;

const insertDisk = keyframes`
  0% {
    transform-origin: 0% 0%;
  }

  20% {
    transform: translate3d(0, 20px, 0);
    transform-origin: 0% 0%;
  }

  100% {
    transform: rotateX(83deg) translateY(-350px);
    transform-origin: 0% 0%;
  }
`;

const FloppyDisk = styled(Icon).attrs({
  name: 'floppy-disk',
  width: 134,
  height: 120,
})`
  animation: ${insertDisk} 1.5s forwards infinite;
  position: absolute;
  bottom: 0;
  left: 12px;
`;

export default class KickStart extends Component {
  static propTypes = {
    data: PropTypes.shape(),
  }

  static defaultProps = {
    data: {},
  }

  state = {
    active: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }

  render() {
    const { data } = this.props.data;
    return (
      <Fader
        active={this.state.active}
        transitionAppear
        flex={1}
        flexDirection="column"
      >
        <Head data={data} />

        <Flex
          bg="purple"
          p={3}
          color="tumbleWeed"
          flex={1}
          flexDirection={['column', null, 'row']}
          align={['center', null, 'flex-end']}
          justify={['center', null, 'space-between']}
          minHeight="min-content"
        >
          <Box
            w={180}
            ml={[null, null, 4]}
            mb={[3, null, 4]}
            lineHeight={0}
          >
            <Link to="/">

              <Tick src={tick} height={150} width={165} mb={3} mx="auto" />

              2.0 Roms (37.350)
              <br />
              Copyright &copy; 2000-2017
              <br />
              Lance Guyatt, Inc.
              <br />
              All Rights Reserved
            </Link>
          </Box>

          <Box
            height="169px"
            w={156}
            mr={[null, null, 4]}
            mb={[null, null, 4]}
            position="relative"
            flex="none"
          >
            <Link to="/" href="/">
              <Icon name="disk-drive" width={156} height={38} />
              <FloppyDisk />
            </Link>
          </Box>
        </Flex>
      </Fader>
    );
  }
}
