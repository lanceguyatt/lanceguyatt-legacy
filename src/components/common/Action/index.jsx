import React from 'react';
import PropTypes from 'prop-types';

import { Button, Link } from './style';

const Action = (props) => {
  const { name, to, onClick, external } = props;
  return (
    to ? <Link to={to} external={external}>{name}</Link> : <Button onClick={onClick}>{name}</Button>
  );
};

Action.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  name: 'Action name',
  to: '',
  onClick: null,
};

export { Action };
