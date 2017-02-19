import React from 'react';

const Svg = ({ markup, className }) => (
  <span dangerouslySetInnerHTML={{ __html: markup }} className={`c-icon ${className}`} />
);

Svg.propTypes = {
  markup: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default Svg;
