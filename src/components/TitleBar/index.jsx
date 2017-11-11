import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Flex } from '../common';

const Wrapper = styled(({ name, ...rest }) => <Flex {...rest} />).attrs({
})`
  height: 22px;
  align-items: center;
}`;

const Inner = styled(({ fontSize, ...rest }) => <Box {...rest} />).attrs({
  fontSize: 2,
})`
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
    <Wrapper {...props}>
      <Inner>{name}</Inner>
      <button>tab</button>
    </Wrapper>
  );
};

TitleBar.propTypes = {
  name: PropTypes.string,
};

TitleBar.defaultProps = {
  name: '',
};

export default TitleBar;
