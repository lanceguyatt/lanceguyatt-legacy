import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeProps } from 'styled-system';
import { Box as Foo } from 'grid-styled';

import image from './box.svg';

const BaseComponent = (props) => {
  const next = removeProps(props);
  return <Foo {...next} />;
};

const Wrapper = styled(BaseComponent)`
  border-image: url(${image}) 4 stretch;
  border-style: solid;
  border-width: 4px;
  padding: 2px;
`;

const Box1 = (props) => {
  const { children, flex } = props;
  return (
    <Wrapper flex={flex}>
      {children}
    </Wrapper>
  );
};

Box1.propTypes = {
  // children: PropTypes.shape(),
  flex: PropTypes.string,
};

Box1.defaultProps = {
  // children: ,
  flex: '',
};

export { Box1 };
