import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../Box';

const Svg = styled(({
  name,
  ...props
}) => <Box {...props} />).attrs({
  is: 'svg',
  display: 'block',
  width: 46,
  height: 62,
})``;

const Icon = (props) => {
  const { name } = props;
  return (
    <Svg {...props}>
      <use xlinkHref={`/images/icons.svg#i-${name}`} />
    </Svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  // width: PropTypes.number,
  // height: PropTypes.number,
};

Icon.defaultProps = {
  name: 'file',
  // width: 40,
  // height: 40,
};

export { Icon };
