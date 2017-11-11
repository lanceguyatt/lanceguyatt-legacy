import React from 'react';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';
import styled from 'styled-components';

const Wrapper = styled(({ bg, p, ...rest }) => <label {...rest} />)`
  user-select: none;
  ${space};
  ${color};
`;

export const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <Wrapper htmlFor={htmlFor} bg="danger" p={3} {...props}>
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
