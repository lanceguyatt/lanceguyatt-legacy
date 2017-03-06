import React from 'react';

import Head from '../../components/head/';
import Alert from '../../components/alert/';
import Audio from '../../components/audio/';

import styles from './style.css';

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

class GuruMeditation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toasty: false,
    };
  }

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const konamiClass = 'konami';
    const toastyAudio = document.getElementById('js-toasty-audio');
    const toastyImage = document.getElementById('js-toasty-image');
    const animationEvent = this.whichAnimationEvent();

    document.addEventListener('keydown', (e) => {
      konamiCodeArray.push(e.keyCode);

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load();
        toastyAudio.play();
        this.setState({ toasty: true });
        toastyImage.classList.add(konamiClass);
        konamiCodeArray = [];
      }
    });

    animationEvent && toastyImage.addEventListener(animationEvent, () => {
      this.setState({ toasty: false });
    });
  }

  whichAnimationEvent() {
    const el = document.createElement('fakeelement');

    const animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'Animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    let a = null;

    for (a in animations) {
      if (el.style[a] !== undefined) {
        return animations[a];
      }
    }
  }


  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.guruMeditation}>
        <Head data={data} />
        <Alert alert={alert} error />
        <div className={!this.state.toasty ? styles.toasty1 : styles.toasty2} id="js-toasty-image" />
        <Audio audio={toastyMp3} id="js-toasty-audio" />
      </div>
    );
  }
}

GuruMeditation.propTypes = {
  route: React.PropTypes.shape(),
};

GuruMeditation.defaultProps = {
  route: {},
};

export default GuruMeditation;
