import React from 'react';

const Audio = ({ audio }) => (
  <audio id={audio.id}>
    <source src={audio.src} type={audio.type} />
  </audio>
);

Audio.propTypes = {
  audio: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
};

Audio.defaultProps = {
  audio: {},
};

export default Audio;
