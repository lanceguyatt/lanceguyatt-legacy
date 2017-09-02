import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, transit } from 'react-css-transition';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { position, size } from 'polished';

import Fader from '../../components/Fader';
import Head from '../../components/Head';
import Alert from '../../components/alert';
import Audio from '../../components/Audio';

import toastyImage from './toasty.png';
import mp3 from './toasty.mp3';

const toastyMp3 = {
  id: 'js-toasty-audio',
  src: mp3,
  type: 'audio/mp3'
};

const Wrapper = styled(Flex)`
  background-color: #000;
  height: 100vh;
  min-height: min-content;
  overflow: hidden;
  position: relative;
`;

const Toasty = styled(CSSTransition)`
  background: url(${toastyImage});
  ${position('absolute', null, '0', '0', null)} ${size('200px')};
`;

const message = {
  name: 'Software Failure. Press left mouse button to continue.',
  description: 'Guru Meditation #00004040.00004040',
  url: '/'
};

class GuruMeditation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      toasty: false
    };
  }

  componentWillMount() {
    this.setState({ active: true });
  }

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const toastyAudio = document.getElementById('js-toasty-audio');

    document.addEventListener('keydown', e => {
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
    return (
      <Fader active={this.state.active} transitionAppear>
        <Wrapper direction={'column'} align={'center'} justify={'center'}>
          <Head item={this.props.item} />

          <Alert error animate item={message} />

          <Toasty
            defaultStyle={{ transform: 'translate(200px, 0)' }}
            enterStyle={{
              transform: transit('translate(0, 0)', 400, 'ease-in-out')
            }}
            leaveStyle={{
              transform: transit('translate(200px, 0)', 300, 'ease-in-out')
            }}
            activeStyle={{ transform: 'translate(0, 0)' }}
            transitionDelay={{ enter: 0, leave: 100 }}
            onTransitionComplete={() => this.setState({ toasty: false })}
            active={this.state.toasty}
          />

          <Audio audio={toastyMp3} id={'js-toasty-audio'} />
        </Wrapper>
      </Fader>
    );
  }
}

GuruMeditation.propTypes = {
  item: PropTypes.shape()
};

GuruMeditation.defaultProps = {
  item: {}
};

export default GuruMeditation;
