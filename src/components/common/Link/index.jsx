import React from 'react';
import PropTypes from 'prop-types';
import { Link as Link2 } from 'react-router-dom';

import styled from 'styled-components';

const Name = styled.div`
  background: red;
`;

const Wrapper = styled(Link2).attrs({
  target: props => props.external ? '_blank' : null,
  rel: props => props.external ? 'noopener noreferrer' : null,
})`
  display: block;
`;

const Link = (props) => {
  const { item, external } = props;
  const { name, url } = item;
  return (
    <Wrapper
      href={url}
      external={external}
    >
      <Name>{name}</Name>
    </Wrapper>
  );
};

Link.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  external: PropTypes.bool,
};

Link.defaultProps = {
  item: {
    name: 'Link name',
    url: '#',
  },
  external: false,
};

export { Link };
