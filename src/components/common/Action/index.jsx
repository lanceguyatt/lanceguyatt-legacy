import React from 'react';
import PropTypes from 'prop-types';

import { Button, A } from './style';

const Action = (props) => {
  const {
    name, href, onClick, external,
  } = props;
  return (
    href
      ? <A href={href} external={external} {...props}>{name}</A>
      : <Button onClick={onClick} {...props}>{name}</Button>
  );
};

Action.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  name: 'Action name',
  href: '',
  onClick: null,
};

export { Action };
