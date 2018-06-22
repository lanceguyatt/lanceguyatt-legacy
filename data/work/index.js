import { ap } from './ap';
import { awin } from './awin';
import { bauerMedia } from './bauermedia';
import { mq } from './mq';
import { novagraaf } from './novagraaf';
import { wilsonFletcher } from './wilsonfletcher';

export * from './ap';
export * from './awin';
export * from './bauermedia';
export * from './mq';
export * from './novagraaf';
export * from './wilsonfletcher';

const work = {
  id: 1,
  name: 'Work',
  description: 'Work description',
  url: '/work/',
  parent: '/',
  type: 'drawer',
  items: [novagraaf, bauerMedia, ap, awin, mq, wilsonFletcher],
};

export default work;
