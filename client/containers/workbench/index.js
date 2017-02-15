import React from 'react';

import Head from '../../components/head/';
import Titlebar from '../../components/titlebar/';
import Window from '../../components/window/';
import Directory from '../../components/directory';

// import './style.css';

const NAV = {
  name: 'Main',
  items: [
    {
      id: 1,
      name: 'Ram Disk',
      url: '#',
      type: 'disk',
    }, {
      id: 2,
      name: 'Work',
      url: '/work',
      type: 'drive',
    }, {
      id: 3,
      name: 'About',
      url: '/about',
      type: 'drive',
    },
  ],
};

const page = {
  name: 'WorkBench',
  description: 'WorkBench description',
};

const WorkBench = ({ children }) => (
  <div>
    <Head page={page} />
    <Titlebar>
      <h2>{page.name}</h2>
    </Titlebar>
    <Window>
      <Directory directory={NAV.items} />
      {children}
    </Window>
  </div>
);

WorkBench.propTypes = {
  children: React.PropTypes.element,
};

export default WorkBench;
