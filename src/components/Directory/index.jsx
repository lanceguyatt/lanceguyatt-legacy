import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Box, Flex } from '../common';

const Wrapper = styled(({
  data,
  ...props
}) => (<Flex {...props} />))``;

export default function Directory(props) {
  const { data } = props;
  return (
    <Wrapper
      alignItems="flex-start"
      {...props}
    >
      {data.map(item => (
        <Box
          m={1}
          maxWidth={100}
          key={item.id}
        >
          <Link
            to={item.url}
            href={item.url}
            target={item.external ? '_blank' : null}
            rel={item.external ? 'external' : null}
          >
            {item.type === 'file' ?
              <Icon
                name="file"
                width={46}
                height={62}
                mb={1}
                mx="auto"
              />
              :
              <Icon
                name="drawer"
                width={65}
                height={38}
                mb={1}
                mx="auto"
              />
            }
            <Box
              textAlign="center"
            >
              {item.name}
            </Box>
          </Link>
        </Box>
      ))}
    </Wrapper>
  );
}

// Directory.propTypes = {
//   items: PropTypes.node,
// };
//
// Directory.defaultProps = {
//   items: null,
// };
