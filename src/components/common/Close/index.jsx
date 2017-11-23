import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import selected from './selected.svg';
import unSelected from './unselected.svg';

const Wrapper = styled(Link)`
  background-image: url(${unSelected});
  display: block;
  height: 22px;
  user-select: none;
  width: 20px;

  &:active {
    background-image: url(${selected});
  }
}
`;

const Close = props => (
  <Wrapper to={props.url} {...props} />
);

Close.propTypes = {
  url: PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export { Close };
