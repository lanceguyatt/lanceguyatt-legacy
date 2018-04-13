import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, transit } from 'react-css-transition';
import {
  Alert,
  Audio,
  Flex,
  Fader,
} from '../../components/common';

import Head from '../../components/Head';

const toastyMp3 = {
  id: 'js-toasty-audio',
  src: require('./toasty.mp3'),
  type: 'audio/mp3',
};

const Wrapper = Flex.extend.attrs({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'dark',
  minHeight: 'min-content',
  p: 3,
  position: 'relative',
})`
  overflow: hidden;
`;

const Toasty = styled(CSSTransition)`
  background-image: url(${require('./toasty.png')});
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  height: 200px;
`;

const message = {
  name: 'Software Failure. Press left mouse button to continue.',
  description: 'Guru Meditation #00004040.00004040',
  url: '/',
};

export default class GuruMeditation extends Component {
  static propTypes = {
    data: PropTypes.shape(),
  };

  static defaultProps = {
    data: null,
  };

  state = {
    active: false,
    toasty: false,
  };

  componentWillMount() {
    this.setState({ active: true });
  }

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const toastyAudio = document.getElementById('js-toasty-audio');

    document.addEventListener('keydown', (e) => {
      konamiCodeArray.push(e.keyCode);

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load();
        toastyAudio.play();
        konamiCodeArray = [];
        this.setState({ toasty: true });
      }
    });
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
        <Wrapper>

          <Head data={data} />

          <Alert animate data={message} colors="alert.danger" />

          <Toasty
            defaultStyle={{ transform: 'translate(200px, 0)' }}
            enterStyle={{
              transform: transit('translate(0, 0)', 400, 'ease-in-out'),
            }}
            leaveStyle={{
              transform: transit('translate(200px, 0)', 300, 'ease-in-out'),
            }}
            activeStyle={{ transform: 'translate(0, 0)' }}
            transitionDelay={{ enter: 0, leave: 100 }}
            onTransitionComplete={() => this.setState({ toasty: false })}
            active={this.state.toasty}
          />

          <Audio audio={toastyMp3} id="js-toasty-audio" />
        </Wrapper>
      </Fader>
    );
  }
}
