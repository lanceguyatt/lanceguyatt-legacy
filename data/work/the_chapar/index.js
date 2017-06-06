import image from '../../../client/images/work/the_chapar.png';

export default {
  id: 8,
  name: 'The Chapar',
  description: 'The Chapar website',
  url: '/work/the-chapar/',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    { id: 1, name: 'HTML5' },
    { id: 2, name: 'CSS3' },
  ],
  components: [
    { id: 1, name: 'Angular JS' },
    { id: 2, name: 'gulp.js' },
    { id: 3, name: 'PostCSS' },
  ],
  datePublished: '2017-06-01',
  website: 'http://thechapar.com',
  type: 'drawer',
};
