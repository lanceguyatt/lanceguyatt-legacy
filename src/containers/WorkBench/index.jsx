import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Action,
  Box,
  Checkbox,
  Close,
  Depth,
  Fader,
  Flex,
  Radio,
  Sizing,
  Text,
  Zoom,
} from '../../components/common';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Window from '../../components/Window';
import Directory from '../../components/Directory';
import { site, kickstart, workbench } from '../../data';

// import text from '../../components/common/Text/text.svg';

const Dl = Flex.extend.attrs({
  is: 'dl',
})`
  background: pink;
`;

const Dt = Box.extend.attrs({
  is: 'dt',
  bg: 'purple',
  pr: 1,
})`
`;

const Dd = Box.extend.attrs({
  is: 'dd',
  bg: 'orange',
  border: 3,
})`
  border-image: url(${require('../../components/common/Text/text.svg')}) 4 stretch;
`;

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

  handleClick(e) {
    alert('Clicked');
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

        <Head data={data} />

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
          >
            <Depth />
          </TitleBar>

          <Flex
            flexDirection={['column', 'row']}
            flexFlow="wrap row"
            flex={1}
          >
            <Window
              data={{ name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }}
              flex={1}
            />
            <Window
              data={{ name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }}
              flex={1}
            />
            <Window
              data={{ name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }}
              flex={1}
            >
              <Box
                m={3}
                flex={1}
              >
                <Dl flexDirection={['column', 'row']} flex={1} flexWrap="wrap">
                  <Dt color="light" flex={1}>Name:</Dt>
                  <Dd flex={1}>Awin</Dd>
                  <Dt color="light" flex={1}>Name:</Dt>
                  <Dd flex={1}>Awin</Dd>
                </Dl>
              </Box>
            </Window>
            <Window
              data={workbench}
              close={kickstart.url}
              flex={1}
            >
              <Flex
                flexWrap="wrap"
                p={3}
              >
                <Action name="A" href="#foo" />
                <Action name="Button" />
                <Text name="Test" defaultValue="Value" />
                <Zoom />
                <Depth />
                <Close name="Close this window" />
                <Sizing />
                <Checkbox />
                <Checkbox />
                <Radio name="foo" onClick={() => { this.handleClick(); }} />
                <Radio name="foo" />
                <Directory
                  data={workbench.items}
                  flexDirection="row"
                />
              </Flex>

            </Window>
          </Flex>
        </Flex>
      </Fader>
    );
  }
}
