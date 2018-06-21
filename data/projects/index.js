import lanceguyatt from './lanceguyatt/';
import fronter from './fronter/';

const projects = {
  id: 2,
  name: 'Projects',
  description: 'Side projects',
  url: '/projects/',
  parent: '/',
  type: 'drawer',
  items: [lanceguyatt, fronter],
};

export default projects;
