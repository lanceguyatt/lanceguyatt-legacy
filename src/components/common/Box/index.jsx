import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box as Foo } from 'grid-styled';

import image from './box.svg';

const Wrapper = styled(Foo)`
  border-image: url(${image}) 4 stretch;
  border-style: solid;
  border-width: 4px;
  padding: 2px;
  line-height: 1;
  xwidth: calc(100% - 4px);
`;

const Box = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

// Box.propTypes = {
//   children: PropTypes.obj,
// };
//
// Box.defaultProps = {
//   children: '',
// };

export { Box };
