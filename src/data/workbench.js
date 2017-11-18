import { work } from './work';
import { projects } from './projects';
import { about } from './about';

export const workbench = {
  id: 'workbench',
  name: 'Workbench',
  alternateHeadline: 'Workbench',
  description: 'Web developer with over 12 years of professional experience',
  url: '/',
  items: [
    {
      id: work.id,
      name: work.name,
      url: work.url,
    },
    {
      id: projects.id,
      name: projects.name,
      url: projects.url,
    },
    {
      id: about.id,
      name: about.name,
      url: about.url,
    },
  ],
};
