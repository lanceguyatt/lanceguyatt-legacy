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
      name: 'About',
      url: '/about/',
      type: 'drawer',
    },
  ],
};

module.exports = workbench;
