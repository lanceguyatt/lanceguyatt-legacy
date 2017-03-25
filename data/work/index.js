export default {
  name: 'Work',
  description: 'Work description',
  url: '/work',
  parent: '/',
  type: 'drawer',
  items: [
    {
      name: 'Awin',
      url: '/work/awin/',
      type: 'drawer',
    }, {
      name: 'Associated Press',
      url: '/work/associated-press/',
      type: 'drawer',
    }, {
      name: 'MQ',
      url: '/work/mq/',
      type: 'drawer',
    }, {
      name: 'Wilson Fletcher',
      url: '/work/wilson-fletcher/',
      type: 'drawer',
    }, {
      name: 'NZZ',
      url: 'https://abo.nzz.ch/',
      type: 'file',
    }, {
      name: 'Interislander',
      url: 'https://www.interislander.co.nz/',
      type: 'file',
    },
  ],
};
