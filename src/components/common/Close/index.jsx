import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  background-color: transparent;
  background-image: url(${require('./close.svg')});
  display: block;
  height: 22px;
  user-select: none;
  width: 20px;

  &:active {
    background-position: -20px 0;
  }
}
`;

const Close = props => (
  <Wrapper to={props.url} {...props} title="Close" />
);

Close.propTypes = {
  url: PropTypes.string,
};

Close.defaultProps = {
  url: '',
};

export { Close };
