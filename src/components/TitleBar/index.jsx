import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Flex } from '../common';

const Inner = styled(Box)`
  flex: 1;
  line-height: 1.125;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

const TitleBar = (props) => {
  const { name } = props;
  return (
    <Flex height="22px" align="center" {...props}>
      <Inner>{name}</Inner>
    </Flex>
  );
};

TitleBar.propTypes = {
  name: PropTypes.string,
};

TitleBar.defaultProps = {
  name: '',
};

export default TitleBar;
