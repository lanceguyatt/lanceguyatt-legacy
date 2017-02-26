import React from 'react';
import { Route } from 'react-router';

import Layout from './components/layout/';
import WorkBench from './containers/workbench/';
import Drawer from './components/drawer/';
import KickStart from './containers/kickstart/';
import GuruMeditation from './containers/guru_meditation/';

import about from '../data/about.json';
import kickstart from '../data/kickstart.json';
import guruMeditation from '../data/guru_meditation.json';

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
      url: 'https://www.wilsonfletcher.com/',
      type: 'shell',
      external: 'true',
    }, {
      id: 2,
      name: 'Associated Press',
      url: 'https://www.ap.org/en-gb/',
      type: 'shell',
      external: 'true',
    }, {
      id: 3,
      name: 'MQ',
      url: 'http://mqmentalhealth.org',
      type: 'shell',
      external: 'true',
    }, {
      id: 4,
      name: 'Neon',
      url: 'https://www.neontv.co.nz/',
      type: 'shell',
      external: 'true',
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

const routes = (
  <div>
    <Route component={Layout}>
      <Route path="/" component={WorkBench} data={workbench}>
        <Route path="/ramdisk/" component={Drawer} data={ramdisk} />
        <Route path="/work/" component={Drawer} data={work} />
        <Route path="/about/" component={Drawer} data={about} />
      </Route>
      <Route path="/kickstart/" component={KickStart} data={kickstart} />
      <Route path="*" component={GuruMeditation} status={404} data={guruMeditation} />
    </Route>
  </div>
);

export default routes;
