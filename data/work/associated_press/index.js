import image from '../../../src/images/work/ap.png';

const associatedPress = {
  id: 6,
  name: 'Associated Press',
  description: 'Associated Press website',
  url: '/work/associated-press/',
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
    { id: 1, name: 'gulp.js' },
    { id: 2, name: 'Jade' },
    { id: 3, name: 'PostCSS' },
  ],
  website: 'http://ap.org',
  type: 'drawer',
};

export default associatedPress;
