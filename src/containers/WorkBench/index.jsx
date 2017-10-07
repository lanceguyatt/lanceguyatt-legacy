/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Fader,
  Flex,
} from '../../components/common';

import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Window from '../../components/Window';

const Wrapper = styled(Flex)`
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

export default class WorkBench extends Component {
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
    const { data } = this.props;
    return (
      <Fader transitionAppear active={this.state.active}>

        <Head item={data} />

        <Wrapper direction={'column'} bg={'secondary'}>

          <TitleBar bg={'dark'} color={'secondary'}>
            Lance Guyatt, Web Developer. Copyright © 2000-2017. All Rights
            Reserved
          </TitleBar>

          <Flex direction={['column', 'row']} style={{ flex: 1 }}>
            <Window item={{ name: 'Work' }} style={{ flex: 1 }}>
              <Link to={'/work/1oC2G4ZjgUSakaWauSkEYA'}>Awin</Link>
            </Window>
          </Flex>
        </Wrapper>
      </Fader>
    );
  }
}

WorkBench.propTypes = {
  data: PropTypes.shape(),
};

WorkBench.defaultProps = {
  data: null,
};
