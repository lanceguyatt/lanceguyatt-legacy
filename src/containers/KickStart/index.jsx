import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  alignItems,
  color,
  flexDirection,
  justifyContent,
  removeProps,
  space,
  width,
} from 'styled-system';
import styled, { keyframes } from 'styled-components';

import { Fader, Icon } from '../../components/common';
import Head from '../../components/Head';
import tick from './tick.png';

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <div {...next} />;
};

const Wrapper = styled(BaseComponent)`
  display: flex;
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
  ${alignItems}
  ${color}
  ${flexDirection}
  ${justifyContent}
`;

const Copyright = styled(BaseComponent)`
  line-height: 1.5;
  ${space}
  ${color}
  ${width}
`;

const Tick = styled.img`
  background-size: 100%;
  display: block;
  height: 150px;
  ${space}
  ${width}
`;

const Loading = styled(BaseComponent)`
  height: 169px;
  position: relative;
  ${color}
  ${space}
  ${width}
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

  state = {
    active: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }

  render() {
    return (
      <Fader transitionAppear active={this.state.active}>
        <Head item={this.props.item} />
        <Wrapper
          bg="purple"
          color="tumbleWeed"
          flexDirection={['column', null, 'row']}
          align={['center', null, 'flex-end']}
          justify={['center', null, 'space-between']}
        >
          <Copyright
            w={180}
            ml={[null, null, 4]}
            mb={[3, null, 4]}
          >
            <Link to="/" href="/">
              <Tick src={tick} alt="" width={165} mb={3} mx="auto" />
              2.0 Roms (37.350)
              <br />
              Copyright &copy; 2000-2017
              <br />
              Lance Guyatt, Inc.
              <br />
              All Rights Reserved
            </Link>
          </Copyright>

          <Loading
            w={156}
            mr={[null, null, 4]}
            mb={[null, null, 4]}
          >
            <Link
              to="/"
              href="/"
            >
              <DiskDrive />
              <FloppyDisk />
            </Link>
          </Loading>
        </Wrapper>
      </Fader>
    );
  }
}
