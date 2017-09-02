/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Fader from '../../components/Fader';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Drawer from '../../components/drawer';
import Window from '../../components/Window';
import Directory from '../../components/Directory';
import { Button } from '../../components/Gadgets';

const navPrimary = {
  name: 'Primary navigation',
  items: [
    { id: 'work', name: 'Work', url: '/work/' },
    { id: 'projects', name: 'Projects', url: '/projects/' },
    { id: 'about', name: 'About', url: '/about/' }
  ]
};

const Wrapper = styled(Flex)`
  background-color: #aaa;
  color: #000;
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

export default class WorkBench extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
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
            <Window item={{ name: 'First' }} flex={1}>
              <Directory item={navPrimary} />
              <Button>Button</Button>
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
  item: PropTypes.shape()
};

WorkBench.defaultProps = {
  item: {}
};

// <Switch>
//   <Route path={about.url} exact render={() => <About item={about} />} />
// </Switch>
