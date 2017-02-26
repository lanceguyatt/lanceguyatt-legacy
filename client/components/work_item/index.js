import React from 'react';
import Draggable from 'react-draggable';

import Head from '../head/';
import Window from '../window/';

import Button from '../button/';

const page = {
  name: 'Wilson Fletcher',
  description: 'Description of Wilson Fletcher',
  url: '/work/wilson-fletcher',
  parent: '/work/',
  type: 'drawer',
  memory: {
    full: '35%',
    free: '21%',
    use: '168MB',
  },
};

const WorkItem = () => (
  <Draggable>
    <div>
      <Head page={page} />
      <Window data={page} cssClasses="c-window--drawer">
        <Button url="http://wilsonfletcher.com" name="Launch" external="true" />
      </Window>
    </div>
  </Draggable>
);

export default WorkItem;
