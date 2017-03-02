/* eslint-disable no-undef */
import React from 'react';
import CSSModules from 'react-css-modules';

import Head from '../../components/head/';
import Alert from '../../components/alert/';
// import Audio from '../../components/audio/';

import styles from './style.css';

// import toastyMp3 from './toasty.mp3';

const alert = {
  name: 'Software Failure. Press left mouse button to continue.',
  description: 'Guru Meditation #00004040.00004040',
  url: '/',
  type: 'error',
};

// const toast = {
//   id: 'js-toasty-audio',
//   src: toastyMp3,
//   type: 'audio/mp4',
// };

class GuruMeditation extends React.Component {

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const konamiClass = 'konami';
    // const toastyAudio = document.getElementById('js-toasty-audio');
    const toastyImage = document.getElementById('js-toasty-image');
    const animationEvent = this.whichAnimationEvent();

    document.addEventListener('keydown', (e) => {
      konamiCodeArray.push(e.keyCode);

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        // toastyAudio.load();
        // toastyAudio.play();
        toastyImage.classList.add(konamiClass);
        konamiCodeArray = [];
      }
    });

    animationEvent && toastyImage.addEventListener(animationEvent, () => {
      toastyImage.classList.remove(konamiClass);
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
      <div styleName="guru-meditation">
        <Head data={data} />
        <Alert alert={alert} />
        <div styleName="toasty" id="js-toasty-image" />
        { /* <Audio audio={toast} />*/ }
      </div>
    );
  }
}

GuruMeditation.propTypes = {
  route: React.PropTypes.shape(),
};

export default CSSModules(GuruMeditation, styles, { allowMultiple: true });
