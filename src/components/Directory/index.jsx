import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export default function Directory(props) {
  return (
    <Flex {...props}>
      {props.data.map(item => (
        <ListItem key={item.id}>
          <Link to={item.url} href={item.url} target={item.external ? '_blank' : null}>
            <Icon name="drawer" width={65} height={38} mb={5} mx="auto" />
            {item.name}
          </Link>
        </ListItem>
      ))}
    </Flex>
  );
}

// Directory.propTypes = {
//   items: PropTypes.node,
// };
//
// Directory.defaultProps = {
//   items: null,
// };
