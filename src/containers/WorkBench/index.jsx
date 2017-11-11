import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fader, Flex } from '../../components/common';

import { site } from '../../data';

import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Window from '../../components/Window';
import Directory from '../../components/Directory';

const foo = [
  { id: 1, name: 'Awin', url: '/work/1oC2G4ZjgUSakaWauSkEYA' },
  { id: 2, name: 'Projects', url: '/projects/' },
  { id: 3, name: 'About', url: '/about/' },
];

const Wrapper = styled(Flex)`
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

export default class WorkBench extends Component {
  static propTypes = {
    data: PropTypes.shape(),
  };

  static defaultProps = {
    data: null,
  };

  state = {
    active: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }
  render() {
    const { data } = this.props;
    return (
      <Fader transitionAppear active={this.state.active}>

        <Head item={data} />

        <Wrapper column bg="secondary">

          <TitleBar
            bg="dark"
            color="secondary"
            name={`Lance Guyatt, Web Developer. Copyright © 2000-${site.copyrightYear}. All Rights Reserved`}
          />

          <Flex direction={['column', 'row']} flex={1}>
            <Window item={{ name: 'Work' }} flex={1} close="kickstart">
              <Directory items={foo} direction={['column', 'row']} />
              <Directory items={foo} column />
            </Window>
          </Flex>
        </Wrapper>
      </Fader>
    );
  }
}
