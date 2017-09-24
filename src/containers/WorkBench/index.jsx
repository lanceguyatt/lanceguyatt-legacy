/* eslint no-undef: 0 */
import React, { Component } from 'react';
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
  background-color: #aaa;
  color: #000;
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

export default class WorkBench extends Component {
  static propTypes = {
    item: PropTypes.shape(),
  };

  static defaultProps = {
    item: '',
  };

  state = {
    active: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }
  render() {
    const { item } = this.props;
    return (
      <Fader transitionAppear active={this.state.active}>

        <Head item={item} />

        <Wrapper direction={'column'}>

          <TitleBar bg={'black'} color={'#aaa'}>
            Lance Guyatt, Web Developer. Copyright © 2000-2017. All Rights
            Reserved
          </TitleBar>

          <Flex direction={['column', 'row']} flex={1}>
            <Window item={{ name: 'Window 1', to: '/kickstart' }} flex={1} />
            <Window item={{ name: 'Window 2' }} flex={1} />
            <Window item={{ name: 'Window 3' }} flex={1} />
            <Window item={{ name: 'Window 4' }} flex={1}>Content</Window>
          </Flex>
        </Wrapper>
      </Fader>
    );
  }
}
