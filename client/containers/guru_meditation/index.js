/* eslint no-undef: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition, transit } from 'react-css-transition';

import Fader from '../../components/fader/';
import Head from '../../components/head/';
import Alert from '../../components/alert/';
import Audio from '../../components/audio/';

import styles from './style.css';
import toastyImage from './toasty.png';

const alert = {
  name: 'Software Failure. Press left mouse button to continue.',
  description: 'Guru Meditation #00004040.00004040',
  url: '/',
};

const toastyMp3 = {
  id: 'js-toasty-audio',
  src: require('./toasty.mp3'),
  type: 'audio/mp3',
};

export default class GuruMeditation extends Component {
  static propTypes = {
    route: PropTypes.shape(),
  };

  static defaultProps = {
    route: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      toasty: false,
    };
  }

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const toastyAudio = document.getElementById('js-toasty-audio');

    document.body.className = '';
    document.body.classList.add('u-bg-black');

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
    const { data } = this.props.route;

    return (
      <Fader className={styles.guruMeditation} transitionAppear active>

        <Head data={data} />

        <Alert alert={alert} error />

        <CSSTransition
          className={styles.toasty}
          defaultStyle={{ transform: 'translate(200px, 0)' }}
          enterStyle={{ transform: transit('translate(0, 0)', 400, 'ease-in-out') }}
          leaveStyle={{ transform: transit('translate(200px, 0)', 300, 'ease-in-out') }}
          activeStyle={{ transform: 'translate(0, 0)' }}
          transitionDelay={{ enter: 0, leave: 100 }}
          onTransitionComplete={() => this.setState({ toasty: false })}
          active={this.state.toasty}
          style={{ backgroundImage: `url(${toastyImage})` }}
        />

        <Audio audio={toastyMp3} id="js-toasty-audio" />

      </Fader>
    );
  }
}
