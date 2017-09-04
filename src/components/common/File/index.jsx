import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, size } from 'polished';

import imageUnSelected from './file-unselected.svg';
import imageSelected from './file-selected.svg';

const Wrapper = styled.a.attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})`
  background: lime;
  outline: 0;
  padding: 5px;
  text-align: center;
  user-select: none;
  width: 100px;

  > div {
    background-image: url(${imageUnSelected});
    ${margin(null, 'auto', '5px')};
    ${size('62px', '46px')};
  }

  &:focus,
  &:active {
    > div {
      background-image: url(${imageSelected});
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
