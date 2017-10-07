import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { size } from 'polished';

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

const Wrapper = styled(({ animate, ...rest }) => <div {...rest} />)`
  ${props => props.animate ? `animation: ${insertDisk} 1.5s forwards infinite` : null};
  background-image: url(${floppyDisk});
  ${size('120px', '134px')};
`;

const FloppyDisk = (props) => {
  const { animate, style } = props;
  return (
    <Wrapper
      animate={animate}
      style={style}
    />
  );
};

FloppyDisk.propTypes = {
  animate: PropTypes.bool,
};

FloppyDisk.defaultProps = {
  animate: false,
};

export default FloppyDisk;
