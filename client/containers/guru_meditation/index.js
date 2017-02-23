/* eslint-disable no-undef */
import React from 'react';
import classnames from 'classnames/bind';

import Head from '../../components/head/';
import Titlebar from '../../components/titlebar/';
import Alert from '../../components/alert/';
import Audio from '../../components/audio/';

import styles from './style.css';

import site from '../../../data/site/index.json';

// import toastyMp3 from './toasty.mp3';

const cx = classnames.bind(styles);

const alert = {
  name: 'Software Failure. Press left mouse button to continue',
  description: 'Guru Meditation #404',
  url: '/',
};

// const toast = {
//   id: 'js-toasty-audio',
//   src: toastyMp3,
//   type: 'audio/mpeg',
// };

class GuruMeditation extends React.Component {

  componentDidMount() {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const konamiClass = `${cx('konami')}`;
    const toastyAudio = document.getElementById('js-toasty-audio');
    const toastyImage = document.getElementById('js-toasty-image');
    const animationEvent = this.whichAnimationEvent();

    document.addEventListener('keydown', (e) => {
      konamiCodeArray.push(e.keyCode);

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load();
        toastyAudio.play();
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
      <div className={cx('c-guru-meditation')}>
        <Head data={data} />
        <div className={cx('c-guru-meditation__main')}>
          <Titlebar>
            {site.name}. Copyright &copy; 2000-2017 All Rights Reserved.
          </Titlebar>
          <Alert alert={alert} cssClasses="u-border-red" />
          <div id="js-toasty-image" className={`${cx('c-toasty')}`} />
          { /* <Audio audio={toast} />*/ }
        </div>
      </div>
    );
  }
}

GuruMeditation.propTypes = {
  route: React.PropTypes.shape(),
};

export default GuruMeditation;
