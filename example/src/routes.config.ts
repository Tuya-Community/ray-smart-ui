import { Routes } from '@ray-js/types';
import { routeConfig } from './constant/routeConfig';

const allComponents = routeConfig.reduce((acc, cur) => {
  return [...acc, ...cur.list];
}, []);

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/playground',
    path: '/pages/playground/index',
    name: 'Playground',
  },
  ...allComponents.map(d => ({
    route: d.path,
    path: `/pages${d.path}/index`,
    name: d.title,
  })),
];
