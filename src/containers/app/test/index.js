/* eslint no-undef: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../index';

describe(App, () => {
  it('loads without problems', () => require('../index'));
});
