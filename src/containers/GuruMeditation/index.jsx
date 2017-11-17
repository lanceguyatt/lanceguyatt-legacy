import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { Alert, Audio, Flex, Fader } from '../../components/common';
import Head from '../../components/Head';

import toastyImage from './toasty.png';
import mp3 from './toasty.mp3';

const toastyMp3 = {
  id: 'js-toasty-audio',
  src: mp3,
  type: 'audio/mp3',
};

const style = {
  minHeight: 'min-content',
  overflow: 'hidden',
  position: 'relative',
};

const Toasty = styled(CSSTransition)`
  background-image: url(${toastyImage});
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
        <Flex
          bg="dark"
          flexDirection="column"
          align="center"
          justify="center"
          flex={1}
          style={style}
        >

          <Head data={data} />

          <Alert animate data={message} />

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
        </Flex>
      </Fader>
    );
  }
}
