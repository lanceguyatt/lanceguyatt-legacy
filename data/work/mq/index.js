import image from '../../../client/images/work/mq.png';

export default {
  name: 'MQ',
  description: 'MQ website',
  url: '/work/mq',
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
  website: 'http://mqmentalhealth.org',
};
