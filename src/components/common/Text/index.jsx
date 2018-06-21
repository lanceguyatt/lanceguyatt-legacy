import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../common';

const Wrapper = Box.extend.attrs({
  is: 'input',
  height: 28,
  border: 3,
})`
  border-image: url('data:image/svg+xml;utf8,<svg width="68" height="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><path d="M1 26h67v2H1v-2zM66 2h2v24h-2V2zm1-2h1v2h-1V0zM2 2h63v2H2V2zm0 2h2v20H2V4zm0 20h1v2H2v-2z" fill="#000"/><path d="M0 0h67v2H0V0zm0 2h2v24H0V2zm0 24h1v2H0v-2zm3-2h63v2H3v-2zM64 4h2v20h-2V4zm1-2h1v2h-1V2z" fill="#FFF"/></g></svg>') 4 stretch;
`;

const Text = (props) => {
  const { name, type } = props;
  return (
    <Wrapper
      name={name}
      type={type}
      {...props}
    />
  );
};

Text.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

Text.defaultProps = {
  name: '',
  type: 'text',
};

export { Text };
