import React from 'react';
import Window from '../../components/window/';
import DirectoryList from '../../components/directory_list';

const NAV = {
  name: 'Main',
  items: [
    {
      id: 1,
      name: 'Ram Disk',
      url: '#',
    }, {
      id: 2,
      name: 'Work',
      url: '/work',
    },
  ],
};

const WorkBench = () => (
  <div>
    <Window name="WorkBench">
      <DirectoryList directory={NAV} />
    </Window>
  </div>
);

console.log(NAV);

export default WorkBench;
