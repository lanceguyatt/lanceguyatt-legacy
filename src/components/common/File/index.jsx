import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, size } from 'polished';
// import { Box } from 'grid-styled';

import unSelected from './unselected.svg';
import selected from './selected.svg';

const Wrapper = styled.a.attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})`
  text-align: center;
  user-select: none;
  width: 100px;
  background: lime;
  padding: 5px;

  > div {
    background-image: url(${unSelected});
    ${margin(null, 'auto', '5px')};
    ${size('62px', '46px')}
  }

  &:focus,
  &:active {
    outline: 0;

    > div {
      background-image: url(${selected});
    }
  }
`;

const File = ({ item, external }) => (
  <Wrapper href={item.url} external={external}>
    <div />
    {item.name}
  </Wrapper>
);

File.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  external: PropTypes.bool,
};

File.defaultProps = {
  item: {
    name: '',
    url: '',
  },
  external: false,
};

export { File };
