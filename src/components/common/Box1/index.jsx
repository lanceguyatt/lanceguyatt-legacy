import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';

import image from './box.svg';

const Wrapper = styled(Box)`
  border-image: url(${image}) 4 stretch;
  border-style: solid;
  border-width: 4px;
  padding: 2px;
`;

const Box1 = (props) => {
  const { children, flex } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

// Box1.propTypes = {
//   // children: PropTypes.shape(),
//   flex: PropTypes.string,
// };
//
// Box1.defaultProps = {
//   // children: ,
//   flex: '',
// };

export { Box1 };
