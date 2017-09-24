/* eslint react/prop-types: 0 */
import React from 'react';
import { Flex } from '../components/common';

const Center = ({ children }) => (
  <Flex p={4} flex={1} m={3} direction={['column', 'row']} primary style={{ border: '1px solid red' }}>{children}</Flex>
);

export default Center;
