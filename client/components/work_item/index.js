import React from 'react';
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
  <div>
    <Head page={page} />
    <Window data={page}>
      <Button url="http://wilsonfletcher.com" name="Launch" external="true" />
    </Window>
  </div>
);

export default WorkItem;
