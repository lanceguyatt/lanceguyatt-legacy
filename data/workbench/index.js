import { description } from '../site/';

const workbench = {
  name: '',
  alternateHeadline: 'Workbench',
  description,
  url: '/',
  items: [
    {
      id: '1',
      name: 'Work',
      url: '/work/',
      type: 'drawer',
    }, {
      id: '2',
      name: 'Projects',
      url: '/projects/',
      type: 'drawer',
    }, {
      id: '3',
      name: 'About',
      url: '/about/',
      type: 'drawer',
    },
  ],
};

export default workbench;
