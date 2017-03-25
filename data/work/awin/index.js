import image from '../../../client/images/work/awin.png';

export default {
  name: 'Awin',
  descripton: 'Awin website',
  url: '/work/awin',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    'HTML5', 'CSS3', 'Microdata', 'Open Graph',
  ],
  components: [
    'KeystoneJS', 'gulp.js', 'Pug', 'webpack', 'PostCSS',
  ],
  website: 'http://awin.com',
};
