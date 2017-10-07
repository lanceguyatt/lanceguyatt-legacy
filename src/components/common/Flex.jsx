import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex as BaseFlex } from 'grid-styled';
import { space, width, fontSize, color } from 'styled-system';

const Wrapper = styled(({ bg, ...rest }) => <BaseFlex {...rest} />)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const Flex = (props) => {
  const { children } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
};

Flex.defaultProps = {
  children: '',
};

export { Flex };
