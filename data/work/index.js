import associatedPress from './associated_press/';
import awin from './awin/';
import bauerMedia from './bauer_media/';
import mq from './mq/';
import wilsonFletcher from './wilson_fletcher/';

const work = {
  id: 1,
  name: 'Work',
  description: 'Work description',
  url: '/work/',
  parent: '/',
  type: 'drawer',
  items: [awin, associatedPress, mq, wilsonFletcher, bauerMedia],
};

export default work;
