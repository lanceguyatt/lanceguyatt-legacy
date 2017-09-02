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
  ${props => props.animate ? `animation: ${insertDisk} 1.5s forwards infinite` : null};
  width: 134px;
  height: 120px;
  background-image: url(${floppyDisk});
`;

export { Wrapper };
