import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import closeUnSelected from './close-unselected.svg';
import closeSelected from './close-selected.svg';

const Wrapper = styled(Link)`
  background-color: lime;
  xbackground-image: url(${closeUnSelected});
  display: block;
  overflow: hidden;
  text-indent: -999999px;
  ${size(null, '20px')};

  &:focus,
  &:active {
    xbackground-image: url(${closeSelected});
  }
}
`;

const Close = props => (
  <Wrapper to={props.url} className={props.className}>
    Close
  </Wrapper>
);

Close.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

Close.defaultProps = {
  url: '',
  className: '',
};

export { Close };
