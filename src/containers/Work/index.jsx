import React, { Component } from 'react';
import axios from 'axios';

import { Fader, Flex } from '../../components/common';

const rootUrl = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`;
const accessToken = `&access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

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
      <div>
        <h1>{name}</h1>
        <a href={url}>{url}</a>
      </div>
    );
  }

  render() {
    return (
      <Flex>
        <Fader transitionAppear active={this.state.active}>
          {this.state.work ? this.renderWork() : 'Loading'}
        </Fader>
      </Flex>
    );
  }
}
