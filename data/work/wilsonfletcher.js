import image from '../../static/images/work/wf.png';

export const wilsonFletcher = {
  id: 4,
  name: 'Wilson Fletcher',
  description: 'Wilson Fletcher website',
  url: '/work/wilson-fletcher/',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    { id: 1, name: 'HTML5' },
    { id: 2, name: 'CSS3' },
    { id: 3, name: 'Microdata' },
    { id: 4, name: 'Open Graph' },
  ],
  components: [
    { id: 1, name: 'ReactJS' },
    { id: 2, name: 'Styled Components' },
  ],
  website: 'http://wilsonfletcher.com',
  datePublished: '2018-05-12',
  type: 'drawer',
};
