import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Action,
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

          <Window
            data={workbench}
            close={kickstart.url}
            flex={1}
          >
            <Flex wrap p={3} align="flex-start">

              <Flex align="center">
                <Action />
                <Text type="text" placeholder="Placeholder" />
                <Zoom />
                <Depth />
                <Close />
                <Sizing />
                <Checkbox />
                <Checkbox />
                <Radio name="foo" />
                <Radio name="foo" />

              </Flex>

              <Directory
                data={workbench.items}
                flexDirection="row"
              />

            </Flex>
          </Window>
        </Flex>
      </Fader>
    );
  }
}
