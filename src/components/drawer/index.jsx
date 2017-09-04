import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Head from '../Head';
import Window from '../Window';

const Wrapper = styled.div`border: 1px solid red;`;

const Drawer = (item) => {
  const { name } = item;
  return (
    <Wrapper>
      <Head item={item} />
      <Window item={item}>
        <h2>{name}</h2>
      </Window>
    </Wrapper>
  );
};

export default Drawer;
