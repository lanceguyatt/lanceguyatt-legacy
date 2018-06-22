import associatedPress from './associated_press';
import awin from './awin';
import bauerMedia from './bauer_media';
import mq from './mq';
import wilsonFletcher from './wilson_fletcher';
import { novagraaf } from './novagraaf';

export * from './novagraaf';

const work = {
  id: 1,
  name: 'Work',
  description: 'Work description',
  url: '/work/',
  parent: '/',
  type: 'drawer',
  items: [novagraaf, awin, associatedPress, mq, wilsonFletcher, bauerMedia],
};

export default work;
