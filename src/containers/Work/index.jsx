import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Action, Fader, Flex, Box, Box1, Radio, Checkbox, Label } from '../../components/common';
import Window from '../../components/Window';

const rootUrl = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`;
const accessToken = `&access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

const Dl = styled(Flex).attrs({
  is: 'dl',
  bg: 'primary',
  direction: ['column', 'row'],
  align: [null, 'center'],
  wrap: 'wrap',
  mb: 2,
})``;

const Dt = styled(Box).attrs({
  is: 'dt',
  color: 'light',
  bg: 'danger',
  mb: [0, 1],
  flex: [null, '1 0 25%'],
})``;

const Dd = styled(Box1).attrs({
  is: 'dd',
  mb: 1,
  flex: [null, '1 0 75%'],
})``;

export default class Work extends Component {
  state = {
    work: null,
    active: false,
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    const url = `${rootUrl}/entries/${id}?${accessToken}`;
    axios.get(url)
      .then((response) => {
        // console.log(response);
        this.setState({
          work: response.data,
          active: true,
        });
      })
      .catch(error => console.log(error));
  }

  renderWork() {
    const { name, url } = this.state.work.fields;
    return (
      <Window
        flex={1}
        item={{ name, description: 'Test' }}
        close="/"
        justify={[null, 'space-between']}
      >
        <Flex flex={1} column>
          <Dl>
            <Dt>Name:</Dt>
            <Dd>{name}</Dd>
            <Dt>URL:</Dt>
            <Dd>{url}</Dd>
          </Dl>
          <Label htmlFor="foo">
            <Radio id="foo" name="Test" value="blah" mr={1} />
            Test label
          </Label>

          <Label htmlFor="bar">
            <Radio id="bar" name="Test" value="blah" mr={1} />
            Test label
          </Label>

          <Label htmlFor="baz">
            <Checkbox id="baz" name="Test" value="blah" mr={1} />
            Test label
          </Label>

        </Flex>
        <Flex
          direction={['column', 'row']}
          align={[null, 'center']}
          justify={[null, 'space-between']}
        >
          <Action name="Cancel" href="/" mb={[2, 0]} />
          <Action name="Launch" href={url} external />
        </Flex>
      </Window>
    );
  }

  render() {
    return (
      <Fader transitionAppear active={this.state.active} style={{ height: '100%' }}>
        <Flex bg="secondary" flex={1} style={{ height: '100%' }}>
          {this.state.work ? this.renderWork() : 'Loading'}
        </Flex>
      </Fader>
    );
  }
}
