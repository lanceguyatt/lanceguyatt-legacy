import React from 'react';
import { Route } from 'react-router';

import Layout from './components/layout/';
import Folder from './components/folder/';
import WorkItem from './components/work_item/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';

const workbench = {
  name: 'Workbench',
  description: 'Workbench description',
  url: '',
  parent: './',
  items: [
    {
      id: 1,
      name: 'Ram Disk',
      url: '/ramdisk',
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

const work = {
  name: 'Work',
  description: 'Work description',
  url: 'work',
  parent: '/',
  items: [
    {
      id: 1,
      name: 'Wilson Fletcher',
      url: 'work/wilson-fletcher',
    },
  ],
};

const ramdisk = {
  name: 'Ramdisk',
  description: 'Ramdisk description',
  url: 'ramdisk',
  parent: '/',
  items: [],
};


const about = {
  name: 'About',
  description: 'About description',
  url: 'about',
  parent: '/',
  items: [
    {
      id: 1,
      name: 'Github',
      url: 'http://github.com/lanceguyatt',
    },
  ],
};

const kickstart = {
  name: 'KickStart',
  description: 'KickStart description',
  url: 'kickstart',
};

const routes = (
  <div>
    <Route component={Layout}>
      <Route path="/" component={Folder} data={workbench}>
        <Route path="/ramdisk" component={Folder} data={ramdisk} />
        <Route path="/work" component={Folder} data={work}>
          <Route path="/work/wilson-fletcher" component={WorkItem} />
        </Route>
        <Route path="/about" component={Folder} data={about} />
      </Route>
      <Route path="/kickstart" component={KickStart} data={kickstart} />
      <Route path="*" component={GuruMeditation} status={404} />
    </Route>
  </div>
);

export default routes;
