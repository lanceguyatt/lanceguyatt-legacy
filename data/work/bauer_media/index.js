import image from '../../../client/images/work/bauer.png';

export default {
  name: 'Bauer Media',
  description: 'Bauer Media website',
  url: '/work/bauer-media/',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    'HTML5', 'CSS3',
  ],
  components: [
    'KeystoneJS', 'gulp.js', 'Jade', 'Sass', 'CoffeeScript',
  ],
  website: 'https://www.bauermedia.co.uk/',
  datePublished: '2013-10-12',
  type: 'drawer',
};
