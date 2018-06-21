import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(({
  name,
  url,
  ...props
}) => (<Link {...props} />))`
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

const Close = (props) => {
  const { name, url } = props;
  return (
    <Wrapper
      title={name}
      to={url}
      {...props}
    />
  );
};

Close.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

Close.defaultProps = {
  name: 'Close',
  url: '/',
};

export { Close };
