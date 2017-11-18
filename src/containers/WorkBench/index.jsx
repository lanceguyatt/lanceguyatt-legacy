import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Fader, Flex } from '../../components/common';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
// import Work from '../../containers/Work';
import Window from '../../components/Window';
import Directory from '../../components/Directory';
import { about, site, kickstart, projects, workbench, work } from '../../data';

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
          />

          <Window data={workbench} close={kickstart.url} flex={1}>

            <Directory
              data={workbench.items}
              flexDirection="column"
            />

          </Window>
        </Flex>
      </Fader>
    );
  }
}
