/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { Action, Close, Fader, Depth, Box, File, Checkbox, Radio } from '../../components/common';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Drawer from '../../components/Drawer';
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

class WorkBench extends Component {
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
    const { item } = this.props;
    return (
      <Fader transitionAppear active={this.state.active}>
        <Head item={item} />
        <Wrapper direction={'column'}>
          <TitleBar bg={'black'} color={'#aaa'} flex={'none'}>
            Lance Guyatt, Web Developer. Copyright © 2000-2017. All Rights
            Reserved
          </TitleBar>
          <Flex direction={['column', 'row']} flex={'auto'}>
            <Window item={{ name: 'First' }} flex={'1'}>
              <Action name={'Link'} to={'/123'} />
              <Action name={'Button'} onClick={() => { alert('Button clicked'); }} />
              <Close url={'/'} />
              <Depth onClick={() => { alert('Depth clicked'); }} />
              <Box>sdsdsdsd</Box>
              <Flex wrap style={{ border: '1px solid red' }}>
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} external />
                <File item={{ name: 'File name that is long', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
                <File item={{ name: 'File', url: 'http://lanceguyatt.com' }} />
              </Flex>
              <Flex align={'center'} mb={1}>
                <Checkbox name={'test'} id={'foo'} />
                <label htmlFor={'foo'}>Checkbox</label>
              </Flex>
              <Radio name={'test'} />

            </Window>

            <Router>
              <Switch>
                <Route
                  path={'/about'}
                  exact
                  render={() => <Drawer item={{ name: 'About' }} />}
                />
              </Switch>
            </Router>
          </Flex>
        </Wrapper>
      </Fader>
    );
  }
}

WorkBench.propTypes = {
  item: PropTypes.shape(),
};

WorkBench.defaultProps = {
  item: '',
};

export default WorkBench;

// <Directory item={navPrimary} />
