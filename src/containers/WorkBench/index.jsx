/* eslint no-undef: 0 */
import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Flex } from 'grid-styled';

import {
  Action,
  Box,
  // Checkbox,
  Close,
  Depth,
  Drawer,
  Fader,
  Flex,
  File,
  // Label,
  // Radio,
} from '../../components/common';

import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Window from '../../components/Window';
// import Directory from '../../components/Directory';

// const navPrimary = {
//   name: 'Primary navigation',
//   items: [
//     { id: 'work', name: 'Work', url: '/work/' },
//     { id: 'projects', name: 'Projects', url: '/projects/' },
//     { id: 'about', name: 'About', url: '/about/' },
//   ],
// };

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
          <TitleBar bg={'black'} color={'#aaa'} flex={'none'}>
            Lance Guyatt, Web Developer. Copyright © 2000-2017. All Rights
            Reserved
          </TitleBar>

          <Flex direction={['column', 'row']} flex={'auto'} primary p={2}>
            <Window item={{ name: 'First' }} flex={1}>
              <Flex
                align={'flex-start'}
                justify={'flex-start'}
                m={3}
                style={{ display: 'inline-flex', backgroundColor: 'blue', border: '1px solid red' }}
              >
                <Action name={'Link'} to={'/123'} />
                <Action name={'Button'} onClick={() => { alert('Button clicked'); }} />
                <Close url={'/'} />
                <Depth onClick={() => { alert('Depth clicked'); }} />
              </Flex>
            </Window>

            <Window item={{ name: 'Secondary' }} flex={1}>
              <Flex is={'nav'} wrap p={3} align={'flex-start'} justify={'flex-start'} style={{ backgroundColor: 'red' }}>
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} external />
                <File item={{ name: 'File name that', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File name that is long', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
                <Drawer item={{ name: 'Lance Guyatt', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
              </Flex>
            </Window>

            <Window item={{ name: 'Third' }} flex={2}>
              <Flex p={3} flex={1}>
                <Box flex={1}>
                  <img src={'http://lanceguyatt.com/assets/images/apple-touch-icon.png'} alt={''} style={{ backgroundColor: 'red' }} />
                </Box>
                <Box flex={1}>sdsdsdsd</Box>

              </Flex>
            </Window>


          </Flex>
        </Wrapper>
      </Fader>
    );
  }
}

// <Directory item={navPrimary} />

// <Router>
//   <Switch>
//     <Route
//       path={'/about'}
//       exact
//       render={() => <Drawer item={{ name: 'About' }} />}
//     />
//   </Switch>
// </Router>

// <Flex mb={1} p={1} flex={1}>
//   <Checkbox name={'test'} id={'checkbox'} />
//   <Label htmlFor={'checkbox'}>Checkbox</Label>
// </Flex>
//
// <Flex align={'center'} mb={1} p={1}>
//   <Radio name={'test'} id={'radio'} />
//   <Label htmlFor={'radio'}>Radio</Label>
// </Flex>
