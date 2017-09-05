import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size, margin } from 'polished';

import unSelected from './unselected.svg';
import selected from './selected.svg';

const Wrapper = styled(Link)`
  text-align: center;
  user-select: none;
  width: 100px;
  background: lime;
  padding: 5px;

  > div {
    background-image: url(${unSelected});
    ${margin(null, 'auto', '5px')};
    ${size('38px', '65px')};
  }

  &:focus,
  &:active {
    outline: 0;

    > {
      div {
        background-image: url(${selected});
      }
    }
  }
`;

const Drawer = ({ item }) => (
  <Wrapper to={item.url}>
    <div />
    {item.name}
  </Wrapper>
);

Drawer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

Drawer.defaultProps = {
  item: {
    name: '',
    url: '',
  },
};

export { Drawer };
