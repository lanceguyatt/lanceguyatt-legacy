/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { Box as Box1 } from 'grid-styled';

import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import StoryRouter from 'storybook-router';

// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';

import ComponentParams from './router';

import {
  Action,
  Alert,
  Box,
  Flex,
  Checkbox,
} from '../components/common';

import Window from '../components/Window';
import TitleBar from '../components/TitleBar';

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
  .add('Alert primary',
    withInfo({ text: 'Info' })(() => (
      <Flex>
        <Alert primary />
        <Alert danger />
      </Flex>
    )));

// withNotes('A very simple component')(() =>
// <Alert primary item={{ name: 'Test', description: 'Description' }} // />));

storiesOf('Window', module)
  .addWithJSX('1', () => <Window w={300} />);

storiesOf('TitleBar', module)
  .addWithJSX('Default', () => (
    <Box1 p={3} style={{ backgroundColor: 'red' }}>
      <TitleBar>Tilebar name</TitleBar>
    </Box1>
  ));

storiesOf('Params', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <ComponentParams />
  ));
// storiesOf('Links', module)
//   .addDecorator(StoryRouter())
//   .add('params', () => (
//     .addWithJSX('Link internal', () => <Link item={{ name: 'Internal link', url: '/sdsdsd' }} />)
//     .addWithJSX('Link external', () => <Link item={{ name: 'External link', url: 'http://imgur.com' }} external />)
//   ));

storiesOf('Box', module)
  .addWithJSX('Default box', () => <Box p={2}>Box component</Box>);

storiesOf('Info list', module)
  .addWithJSX('Box with notes',
    withNotes('Test note')(() => (
      <Flex direction={['column', 'row']} p={3} flex={1} align={[null, 'center']} secondary>
        <div>Test:</div><Box flex={1}>Box thing</Box>
      </Flex>
    )));

storiesOf('Checkbox', module)
  .addWithJSX('Checkbox 1', () => (
    <div>
      <Checkbox id={'terms'} name={'Terms accepted'} />
      <Checkbox />
      <Checkbox />
    </div>
  ));
