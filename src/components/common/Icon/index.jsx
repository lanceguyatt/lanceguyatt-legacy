import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Svg = styled(({ name, mb, ...props }) => <svg {...props} />)`
  display: block;
  ${space}
`;

const Icon = (props) => {
  const { width, height, name } = props;
  return (
    <Svg width={width} height={height} {...props}>
      <use xlinkHref={`/images/icons.svg#i-${name}`} />
    </Svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  name: 'drawer',
  width: 40,
  height: 40,
};

export { Icon };
