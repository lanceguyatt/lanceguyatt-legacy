const lanceguyatt = {
  id: 1,
  name: 'Lance Guyatt',
  url: 'https://github.com/lanceguyatt/lanceguyatt/',
  type: 'file',
};

const fronter = {
  id: 2,
  name: 'Fronter',
  url: 'https://github.com/lanceguyatt/fronter/',
  type: 'file',
};

const projects = {
  id: 2,
  name: 'Projects',
  description: 'Side projects',
  url: '/projects/',
  parent: '/',
  type: 'drawer',
  items: [lanceguyatt, fronter],
};

export { fronter, lanceguyatt };

export default projects;
