import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { color, removeProps } from 'styled-system';
// import { borderWidth, borderStyle } from 'polished';

const BaseWrapper = (props) => {
  const next = removeProps(props);
  return <Flex {...next} />;
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
}
`;

const TitleBar = props => (
  <Wrapper
    flex={'none'}
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
  children: PropTypes.string,
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
