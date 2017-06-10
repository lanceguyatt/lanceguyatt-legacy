import image from '../../../client/images/work/mq.png';

const mq = {
  id: 5,
  name: 'MQ',
  description: 'MQ website',
  url: '/work/mq/',
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
    { id: 1, name: 'KeystoneJS' },
    { id: 2, name: 'gulp.js' },
    { id: 3, name: 'Pug' },
    { id: 4, name: 'webpack' },
    { id: 5, name: 'PostCSS' },
  ],
  website: 'http://mqmentalhealth.org',
  type: 'drawer',
};

export default mq;
