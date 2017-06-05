import theChapar from './the_chapar/';
import associatedPress from './associated_press/';
import awin from './awin/';
import bauerMedia from './bauer_media/';
import mq from './mq/';
import wilsonFletcher from './wilson_fletcher/';
import nzz from './nzz/';
import interislander from './interislander/';

export default {
  id: 1,
  name: 'Work',
  description: 'Work description',
  url: '/work/',
  parent: '/',
  type: 'drawer',
  items: [
    theChapar,
    awin,
    associatedPress,
    mq,
    wilsonFletcher,
    bauerMedia,
    nzz,
    interislander,
  ],
};
