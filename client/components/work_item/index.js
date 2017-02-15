import React from 'react';
import Head from '../head/';
import Titlebar from '../titlebar/';
import Window from '../window/';

const page = {
  name: 'Wilson Fletcher',
  description: 'Description of Wilson Fletcher',
  url: '/work/wilson-fletcher',
};

const WorkItem = () => (
  <article>
    <Head page={page} />
    <Titlebar>
      <h1>Wilson Fletcher</h1>
    </Titlebar>
    <Window>
      <p>sdsdsd</p>
    </Window>
  </article>
);

export default WorkItem;
