import React from 'react';
import { Route } from 'react-router';

import Layout from './components/layout/';
import WorkBench from './containers/workbench/';
import Folder from './components/folder/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';
import WorkItem from './components/work_item/';

const workbench = {
  name: 'Workbench',
  description: 'Workbench description',
  url: '',
  parent: '/kickstart/',
  items: [
    {
      id: 1,
      name: 'Ram Disk',
      url: '/ramdisk/',
      type: 'disk',
    }, {
      id: 2,
      name: 'Work',
      url: '/work/',
      type: 'drive',
    }, {
      id: 3,
      name: 'About',
      url: '/about/',
      type: 'drive',
    },
  ],
  memory: {
    full: '5%',
    free: '25M',
    use: '2,972k',
  },
};

const work = {
  name: 'Work',
  description: 'Work description',
  usage: '7% full, 35M free, 2,927k in use',
  url: '/work/',
  parent: '/',
  items: [
    {
      id: 1,
      name: 'Wilson Fletcher',
      url: 'work/wilson-fletcher/',
      type: 'drawer',
    },
  ],
  memory: {
    full: '5%',
    free: '25M',
    use: '2,972k',
  },
};

const ramdisk = {
  name: 'Ramdisk',
  description: 'Ramdisk description',
  url: '/ramdisk/',
  parent: '/',
  items: [],
  memory: {
    full: '5%',
    free: '25M',
    use: '2,972k',
  },
};


const about = {
  name: 'About',
  description: 'About description',
  url: '/about/',
  parent: '/',
  items: [
    {
      id: 1,
      name: 'Github',
      url: 'http://github.com/lanceguyatt',
      type: 'drawer',
    },
  ],
  memory: {
    full: '5%',
    free: '25M',
    use: '2,972k',
  },
};

const kickstart = {
  name: 'KickStart',
  description: 'KickStart description',
  url: 'kickstart',
};

const guruMeditation = {
  name: 'Guru Meditation',
  description: 'Guru Meditation description',
  url: '/404/',
};

const routes = (
  <div>
    <Route component={Layout}>
      <Route path="/" component={WorkBench} data={workbench}>
        <Route path="/ramdisk/" component={Folder} data={ramdisk} />
        <Route path="/work/" component={Folder} data={work}>
          <Route path="/work/wilson-fletcher/" component={WorkItem} />
        </Route>
        <Route path="/about/" component={Folder} data={about} />
      </Route>
      <Route path="/kickstart/" component={KickStart} data={kickstart} />
      <Route path="*" component={GuruMeditation} status={404} data={guruMeditation} />
    </Route>
  </div>
);

export default routes;
