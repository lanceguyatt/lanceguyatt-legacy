import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from '../common';

const Inner = Box.extend`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

const TitleBar = (props) => {
  const { name } = props;
  return (
    <Flex
      height={22}
      alignItems="center"
      {...props}
    >
      <Inner
        mx={1}
        flex={1}
        lineHeight={1}
      >
        {name}
      </Inner>
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
