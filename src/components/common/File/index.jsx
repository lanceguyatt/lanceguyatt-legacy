import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, size } from 'polished';

import unSelected from './images/unselected.svg';
import selected from './images/selected.svg';

const Name = styled.div`
  background: orange;
`;

const Icon = styled.div`
  background-image: url(${unSelected});
  ${size('62px', '46px')};
`;

const Wrapper = styled.a.attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})`
  background-color: lime;
  padding: 5px;
  text-align: center;
  user-select: none;
  width: 100px;

  ${Icon} {
    ${margin(null, 'auto', '5px')};
  }

  &:focus,
  &:active {
    outline: 0;

    ${Icon} {
      background-image: url(${selected});
    }
  }
`;

const File = (props) => {
  const { external, item } = props;
  const { name, url } = item;
  return (
    <Wrapper
      href={url}
      external={external}
    >
      <Icon />
      <Name>{name}</Name>
    </Wrapper>
  );
};

File.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  external: PropTypes.bool,
};

File.defaultProps = {
  item: {
    name: 'File name really really long',
    url: '',
  },
  external: false,
};

export { File };
