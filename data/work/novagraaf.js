import image from '../../src/images/work/novagraaf.svg';

export const novagraaf = {
  id: 7,
  name: 'Novagraaf',
  description: 'Associated Press website',
  url: '/work/novagraaf/',
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
    { id: 1, name: 'Drupal 8' },
    { id: 2, name: 'Webpack' },
    { id: 3, name: 'PostCSS' },
  ],
  website: 'http://www.novagraaf.com',
  type: 'drawer',
};
