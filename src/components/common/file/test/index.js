/* eslint no-undef: 0 */
import React, { TestUtils } from 'react';
// import TestUtils from 'react/lib/ReactTestUtils');
import File from '../index';

describe('File', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<File />);
    expect(element).toBeTruthy();
  });
});
