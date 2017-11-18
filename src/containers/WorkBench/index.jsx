import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Fader, Flex } from '../../components/common';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Work from '../../containers/Work';
import Window from '../../components/Window';
import Directory from '../../components/Directory';
import { site, kickstart } from '../../data';

const foo = [
  { id: 1, name: 'Awin', url: '/work/1oC2G4ZjgUSakaWauSkEYA' },
  { id: 2, name: 'Projects', url: '/projects/' },
  { id: 3, name: 'About', url: '/about/' },
];

export default class WorkBench extends Component {
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
    const { data } = this.props;
    return (
      <Fader
        active={this.state.active}
        transitionAppear
        flex={1}
        flexDirection="column"
      >

        <Head item={data} />

        <Flex
          flexDirection="column"
          bg="secondary"
          flex={1}
          minHeight="min-content"
        >

          <TitleBar
            bg="dark"
            color="secondary"
            name={`Lance Guyatt, Web Developer. Copyright © 2000-${site.copyrightYear}. All Rights Reserved`}
          />

          <Flex
            flexDirection={['column', 'row']}
            flex={1}
            wrap
          >
            <Window data={{ name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }} close={kickstart.url} flex={[1, '1 0 50%']}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Window>
            <Window data={{ name: 'Window 2' }} close={kickstart.url} flex={[1, '1 0 50%']}>
              <Directory items={foo} flexDirection={['column', 'row']} />
            </Window>
            <Window data={{ name: 'Window 3' }} close={kickstart.url} flex={[1, '1 0 50%']}>
              <Route path="/work/:id" exact component={Work} />
            </Window>
            <Window data={{ name: 'Window 4' }} close={kickstart.url} flex={[1, '1 0 50%']} />
          </Flex>

        </Flex>
      </Fader>
    );
  }
}
