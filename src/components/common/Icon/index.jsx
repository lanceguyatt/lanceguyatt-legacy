import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`display: block;`;

const Icon = ({ name, width, height }) => (
  <Svg width={width} height={height}>
    <use xlinkHref={`/images/icons.svg#i-${name}`} />
  </Svg>
);

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  name: 'drawer',
  width: 40,
  height: 40,
};

export { Icon };
