import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import floppyDisk from './floppy-disk.svg';

const insertDisk = keyframes`
  0% {
    transform-origin: 0% 0%;
  }

  20% {
    transform: translate3d(0, 20px, 0);
    transform-origin: 0% 0%;
  }

  100% {
    transform: rotateX(83deg) translateY(-350px);
    transform-origin: 0% 0%;
  }
`;

const Wrapper = styled.div`
  ${props =>
    props.animate ? `animation: ${insertDisk} 1.5s forwards infinite` : null};
  width: 134px;
  height: 120px;
`;

export default function FloppyDisk(props) {
  return (
    <Wrapper
      style={{ backgroundImage: `url(${floppyDisk})` }}
      className={props.className}
      animate={props.animate}
    />
  );
}

FloppyDisk.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.boolean
};

FloppyDisk.defaultProps = {
  className: '',
  animate: false
};
