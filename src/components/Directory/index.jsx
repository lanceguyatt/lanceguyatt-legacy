/* eslint no-confusing-arrow: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { Icon } from '../common';

const Wrapper = styled(Box)`background: orange;`;

const WrapperList = styled(Flex)`
  list-style: none;

  li {
    border: 1px solid lime;
    margin-bottom: 10px;
    text-align: center;
    ${props =>
    props.column
      ? `
    background: red;
    `
      : `
    background: green;
    margin-right: 10px;
    `};
    max-width: 100px;

    a {
      display: block;
      max-width: 100px;
    }

    svg {
      margin: 0 auto 5px;
    }
  }
`;

const Directory = (props) => {
  const { item } = props;
  return (
    <Wrapper is={'nav'} m={3}>
      <WrapperList column={props.column}>
        {item.items.map(navItem => (
          <li key={navItem.id}>
            <Link to={navItem.url}>
              <Icon name={'drawer'} width={65} height={38} />
              {navItem.name}
            </Link>
          </li>
        ))}
      </WrapperList>
    </Wrapper>
  );
};

Directory.propTypes = {
  item: PropTypes.shape(),
  column: PropTypes.boolean,
};

Directory.defaultProps = {
  item: '',
  column: false,
};

export default Directory;
