import image from '../../../client/images/work/ap.png';

export default {
  name: 'Associated Press',
  description: 'Associated Press front-end code',
  url: '/work/associated-press/',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    'HTML5', 'CSS3', 'Microdata', 'Open Graph',
  ],
  components: [
    'gulp.js', 'Jade', 'PostCSS',
  ],
  website: 'http://ap.org',
  type: 'drawer',
};
