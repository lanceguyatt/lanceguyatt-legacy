import associatedPress from './associated_press/';
import awin from './awin/';
import bauerMedia from './bauer_media/';
import mq from './mq/';
// import theChapar from './the_chapar/';
import wilsonFletcher from './wilson_fletcher/';

export default {
  id: 1,
  name: 'Work',
  description: 'Work description',
  url: '/work/',
  parent: '/',
  type: 'drawer',
  items: [
    // theChapar,
    awin,
    associatedPress,
    mq,
    wilsonFletcher,
    bauerMedia,
    {
      name: 'NZZ',
      url: 'https://abo.nzz.ch/',
      type: 'file',
    }, {
      name: 'Interislander',
      url: 'https://www.interislander.co.nz/',
      type: 'file',
    },
  ],
};
