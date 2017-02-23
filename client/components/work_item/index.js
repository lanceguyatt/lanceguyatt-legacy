import React from 'react';
import Head from '../head/';
import Titlebar from '../titlebar/';
import Window from '../window/';

const page = {
  name: 'Wilson Fletcher - Work - WorkBench - Lance Guyatt, Web Developer',
  description: 'Description of Wilson Fletcher',
  url: '/work/wilson-fletcher',
};

const WorkItem = () => (
  <article>
    <Head page={page} />
    <Window name='Wilson Fletcher'>
      <article>
        <h1>Wilson Fletcher</h1>
      </article>
    </Window>
  </article>
);

export default WorkItem;
