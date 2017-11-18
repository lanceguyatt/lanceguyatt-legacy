import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import closeUnSelected from './close-unselected.svg';
import closeSelected from './close-selected.svg';

const Wrapper = styled(Link)`
  background-image: url(${closeUnSelected});
  display: block;
  overflow: hidden;
  text-indent: -999999px;
  width: 20px;
  height: 22px;

  &:focus,
  &:active {
    xbackground-image: url(${closeSelected});
  }
}
`;

const Close = props => (
  <Wrapper to={props.url} {...props} />
);

// Close.propTypes = {
//   url: PropTypes.string,
//   className: PropTypes.string,
// };
//
// Close.defaultProps = {
//   url: '',
//   className: '',
// };

export { Close };
