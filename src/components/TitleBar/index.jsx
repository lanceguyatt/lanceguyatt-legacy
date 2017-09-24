import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { color, space, removeProps } from 'styled-system';

const BaseWrapper = (props) => {
  const next = removeProps(props);
  return <Box {...next} />;
};

const Wrapper = styled(BaseWrapper)`
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  line-height: 1.125;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  ${color}
  ${space};
}
`;

const TitleBar = props => (
  <Wrapper
    px={1}
    bg={props.bg}
    color={props.color}
    className={props.className}
  >
    {props.children}
  </Wrapper>
);

TitleBar.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
};

TitleBar.defaultProps = {
  bg: '',
  children: '',
  color: '',
  className: '',
};

export default TitleBar;
