import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from 'styled-components'
import { theme } from '../src/constants';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
