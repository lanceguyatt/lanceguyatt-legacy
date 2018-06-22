import image from '../../../src/images/work/wf.png';

const wilsonFletcher = {
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
    { id: 1, name: 'KeystoneJS' },
    { id: 2, name: 'gulp.js' },
    { id: 3, name: 'Pug' },
    { id: 4, name: 'webpack' },
    { id: 5, name: 'PostCSS' },
  ],
  website: 'http://wilsonfletcher.com',
  datePublished: '2013-10-12',
  type: 'drawer',
};

export default wilsonFletcher;
