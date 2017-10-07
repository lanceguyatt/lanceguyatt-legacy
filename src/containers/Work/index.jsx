import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Action, Fader, Flex, Box, Box1 } from '../../components/common';
import Window from '../../components/Window';

const rootUrl = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`;
const accessToken = `&access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

const Dl = styled(Flex).attrs({
  is: 'dl',
  direction: ['column', 'row'],
  align: [null, 'center'],
  mb: 1,
})``;

const Dt = styled(Box).attrs({
  is: 'dt',
  color: 'light',
  flex: [1, 1],
  mb: [1, 0],
  mr: [0, 1],
})``;

const Dd = styled(Box1).attrs({
  is: 'dd',
  flex: [1, 3],
})``;

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null,
      active: false,
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
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
        close={'/'}
        justify={[null, 'space-between']}
      >
        <Flex flex={1} column>
          <Dl>
            <Dt>Name:</Dt>
            <Dd>{name}</Dd>
          </Dl>
          <Dl>
            <Dt>Url:</Dt>
            <Dd>{url}</Dd>
          </Dl>
        </Flex>
        <Flex
          direction={['column', 'row']}
          align={[null, 'center']}
          justify={[null, 'space-between']}
        >
          <Action name={'Cancel'} to={'/'} />
          <Action name={'Launch'} onClick={() => { alert('Clicked!'); }} />
        </Flex>
      </Window>
    );
  }

  render() {
    return (
      <Fader transitionAppear active={this.state.active}>
        <Flex bg={'secondary'} p={3} flex={1} style={{ height: '400px' }}>
          {this.state.work ? this.renderWork() : 'Loading'}
        </Flex>
      </Fader>
    );
  }
}
