import React from 'react';
import PropTypes from 'prop-types';
import { space, color, removeProps } from 'styled-system';
import styled from 'styled-components';

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <label {...next} />;
};

const Wrapper = styled(BaseComponent)`
  user-select: none;
  ${color}
  ${space}
`;

export const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <Wrapper htmlFor={htmlFor} {...props}>
      {children}
    </Wrapper>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  htmlFor: '',
};
