import image from '../../../client/images/work/bauer.png';

const bauerMedia = {
  id: 3,
  name: 'Bauer Media',
  description: 'Bauer Media website',
  url: '/work/bauer-media/',
  parent: '/work/',
  image: {
    url: image,
  },
  standards: [
    { id: 1, name: 'HTML5' },
    { id: 2, name: 'CSS3' },
  ],
  components: [
    { id: 1, name: 'KeystoneJS' },
    { id: 2, name: 'gulp.js' },
    { id: 3, name: 'Jade' },
    { id: 4, name: 'Sass' },
    { id: 5, name: 'CoffeeScript' },
  ],
  website: 'https://www.bauermedia.co.uk/',
  datePublished: '2013-10-12',
  type: 'drawer',
};

export default bauerMedia;
