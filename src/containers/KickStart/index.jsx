import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Box, Flex, Icon } from '../../components/common';
import Head from '../../components/Head';
import tick from './tick.png';

const Wrapper = styled(Flex)`
  min-height: min-content;
`;

const DiskDrive = styled(Icon).attrs({
  name: 'disk-drive',
  width: 156,
  height: 38,
})`
  position: absolute;
  top: 0;
  left: 0;
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
    item: PropTypes.shape(),
  };

  static defaultProps = {
    item: null,
  };

  // state = {
  //   active: false,
  // };
  //
  // componentWillMount() {
  //   this.setState({ active: true });
  // }

  render() {
    return (
      <div>
        <Head item={this.props.item} />
        <Wrapper
          height="100vh"
          borderWidth={2}
          borderColor="primary"
          bg="purple"
          p={3}
          color="tumbleWeed"
          flexDirection={['column', null, 'row']}
          align={['center', null, 'flex-end']}
          justify={['center', null, 'space-between']}
        >
          <Box
            bg="danger"
            w={180}
            ml={[null, null, 4]}
            mb={[3, null, 4]}
            lineHeight={0}
          >
            <Link to="/" href="/">

              <Box
                bg="secondary"
                height="150px"
                width={165}
                mb={3}
                mx="auto"
                style={{
                  backgroundImage: `url(${tick})`,
                  backgroundSize: 'cover',
                }}
              />

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
            bg="primary"
            height="169px"
            w={156}
            mr={[null, null, 4]}
            mb={[null, null, 4]}
            position="relative"
          >
            <Link
              to="/"
              href="/"
            >
              <DiskDrive />
              <FloppyDisk />
            </Link>
          </Box>
        </Wrapper>
      </div>
    );
  }
}
