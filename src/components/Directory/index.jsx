import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { compose, map, prop } from 'ramda';

import { Icon, Box, Flex } from '../common';

const ListItem = styled(Box).attrs({
  m: 1,
})`
  text-align: center;
  max-width: 100px;

  a {
    display: block;
    max-width: 100px;
  }

  svg {
    margin: 0 auto 5px;
  }
`;

const Nav = children => (
  <Box>
    {children}
  </Box>
);

const List = children => (
  <Flex>
    {children}
  </Flex>
);

const Item = ({ id, name, url }) => (
  <ListItem key={id}>
    <Link to={url} href={url}>
      <Icon name="drawer" width={65} height={38} />
      {name}
    </Link>
  </ListItem>
);

const Directory = compose(Nav, List, map(Item), prop('items'));

// Directory.propTypes = {
//   items: PropTypes.node,
// };
//
// Directory.defaultProps = {
//   items: null,
// };

export default Directory;
