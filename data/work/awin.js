import image from '../../static/images/work/awin.png';

export const awin = {
  id: 7,
  name: 'Awin',
  description: 'Awin website',
  url: '/work/awin/',
  parent: '/work/',
  image: {
    alt: 'Awin image',
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
  website: 'http://awin.com',
  type: 'drawer',
};
