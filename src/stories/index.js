/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';

import { setAddon, storiesOf, addDecorator } from '@storybook/react';
// import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';

import {
  Action,
  Alert,
  Box,
  Flex,
  Checkbox,
  Close,
} from '../components/common';

import Window from '../components/Window';

import '../styles/global';

const Center = storyFn => (
  <Flex p={2} align={'center'}>
    { storyFn() }
  </Flex>
);

setAddon(JSXAddon);

// addDecorator((story, context) => withInfo('common info')(story)(context));
addDecorator(Center);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>);

storiesOf('Action', module)
  .add('Action',
    withInfo({
      text: 'Action information',
      // Warning! This option's name will be likely renamed to "summary"
      // in 3.3 release. Follow this PR #1501 for details
      // other possible options see in Global options section below
    })(() =>
      <Action onClick={action('clicked')} name={'Button'} />,
    ));

storiesOf('Alerts', module)
  .addWithJSX('Alert primary',
    withInfo({ text: 'Info' })(() => (
      <Alert
        primary
        item={{ name: 'Name', description: 'Description' }}
      />
    )));

// withNotes('A very simple component')(() =>
// <Alert primary item={{ name: 'Test', description: 'Description' }} // />));

storiesOf('Window', module)
  .addWithJSX('1', () => <Window w={300} />);

storiesOf('Box', module)
  .addWithJSX('Default box', () => <Box>Box component</Box>);

storiesOf('Box 1', module)
  .addWithJSX('Close', () => <Close />);

storiesOf('Checkbox', module)
  .addWithJSX('Checkbox 1', () => (
    <div>
      <Checkbox id={'terms'} name={'Terms accepted'} />
      <Checkbox />
      <Checkbox />
    </div>
  ));
