import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { Fader } from '../../components/common';
import Head from '../../components/Head';

import DiskDrive from '../../components/DiskDrive';
import FloppyDisk from '../../components/FloppyDisk';

import tick from './tick.png';

const Wrapper = styled(Flex)`
  background-color: #401040;
  color: #e0a080;
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

const Copyright = styled(Box)`line-height: 1.5;`;

const Tick = styled(Box)`
  background-size: 100%;
  height: 150px;
  display: block;
`;

const Loading = styled(Box)`
  width: 156px;
  height: 169px;
  position: relative;
`;

const Disk = styled(DiskDrive)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Floppy = styled(FloppyDisk)`
  position: absolute;
  bottom: 0;
  left: 12px;
`;

export default class KickStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  render() {
    return (
      <Fader transitionAppear active={this.state.active}>
        <Head item={this.props.item} />
        <Wrapper
          direction={['column', null, 'row']}
          align={['center', null, 'flex-end']}
          justify={['center', null, 'space-between']}
        >
          <Copyright ml={[0, 0, 4]} mb={[3, 3, 4]} w={180}>
            <Link to={'/'}>
              <Tick is={'img'} src={tick} alt={''} mb={3} mx={'auto'} w={165} />
              2.0 Roms (37.350)
              <br />
              Copyright &copy; 2000-2017
              <br />
              Lance Guyatt, Inc.
              <br />
              All Rights Reserved
            </Link>
          </Copyright>

          <Loading mr={[0, 0, 4]} mb={[0, 0, 4]}>
            <Link to={'/'}>
              <Disk />
              <Floppy animate />
            </Link>
          </Loading>
        </Wrapper>
      </Fader>
    );
  }
}

KickStart.propTypes = {
  item: PropTypes.shape(),
};

KickStart.defaultProps = {
  item: null,
};
