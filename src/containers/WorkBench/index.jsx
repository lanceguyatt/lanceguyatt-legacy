import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex } from '../../components/common';

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

  render() {
    const { data } = this.props;
    return (
      <div>

        <Head item={data} />

        <Wrapper
          flexDirection="column"
          bg="secondary"
        >

          <TitleBar
            bg="dark"
            color="secondary"
            name={`Lance Guyatt, Web Developer. Copyright © 2000-${site.copyrightYear}. All Rights Reserved`}
          />

          <Flex flexDirection={['column', 'row']} flex={1}>
            <Window item={{ name: 'Work' }} close="kickstart" flex={1}>
              <Directory items={foo} flexDirection={['column', 'row']} />
            </Window>
          </Flex>
        </Wrapper>
      </div>
    );
  }
}
