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
  const { data } = props;
  return (
    <Flex {...props}>
      {data.map(item => (
        <ListItem key={item.id}>
          <Link to={item.url} href={item.url} target={item.external ? '_blank' : null}>
            <Box mb={1}>
              {item.type === 'file' ?
                <Icon name="file" width={46} height={62} mb={1} mx="auto" />
                :
                <Icon name="drawer" width={65} height={38} mb={1} mx="auto" />
              }
              {item.name}
            </Box>
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
