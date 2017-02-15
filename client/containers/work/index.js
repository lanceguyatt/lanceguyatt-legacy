import React from 'react';
import Head from '../../components/head/';
import Titlebar from '../../components/titlebar/';
import Window from '../../components/window/';

const page = {
  name: 'Test',
  description: 'Description of work',
  url: '/work/',
};

const Work = ({ children }) => (
  <section>
    <Head page={page} />
    <Titlebar>
      <h2>Work</h2>
    </Titlebar>
    <Window>
      <h2>Work Item</h2>
      {children}
  </Window>
  </section>
);

export default Work;
