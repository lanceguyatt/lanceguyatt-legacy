import moment from 'moment';
import { homepage } from '../../package.json';

export const site = {
  name: 'Lance Guyatt, Web Developer',
  description: 'Web developer with over 12 years of professional experience.',
  url: homepage,
  themeColor: '#aaa',
  copyrightYear: moment().format('YYYY'),
  dateCreated: '2000-01-01',
  datePublished: '2017-08-28',
  dateModified: moment().format(),
  lang: 'en',
};
