import React, { PropTypes } from 'react';

const Audio = ({ audio }) => (
  <audio id={audio.id}>
    <source src={audio.src} type={audio.type} />
  </audio>
);

Audio.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

Audio.defaultProps = {
  audio: {},
};

export default Audio;
