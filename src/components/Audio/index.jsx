/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ audio }) => (
  <audio id={audio.id}>
    <source src={audio.src} type={audio.type} />
  </audio>
);

Audio.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
};

Audio.defaultProps = {
  audio: {}
};

export default Audio;
