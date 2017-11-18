import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Fader, Flex } from '../../components/common';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Window from '../../components/Window';
import Directory from '../../components/Directory';
import { site, kickstart, workbench } from '../../data';

export default class Drawer extends Component {
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
          />

          <Window data={workbench} close={kickstart.url} flex={1}>

            <Flex
              bg="danger"
            >
              <Directory
                data={workbench.items}
                flexDirection="column"
              />

              <Window data={data} close={data.parent}>
                <Directory data={data.items} />
              </Window>

            </Flex>
          </Window>
        </Flex>
      </Fader>
    );
  }
}
