import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import closeUnSelected from './close-unselected.svg';
import closeSelected from './close-selected.svg';

const Wrapper = styled(Link)`
  background-image: url(${closeUnSelected});
  display: inline-block;
  overflow: hidden;
  text-indent: -999999px;
  ${size('22px', '20px')};

  &:focus,
  &:active {
    background-image: url(${closeSelected});
  }
}
`;

const Close = ({ url }) => <Wrapper to={url}>Close</Wrapper>;

Close.propTypes = {
  url: PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export { Close };
