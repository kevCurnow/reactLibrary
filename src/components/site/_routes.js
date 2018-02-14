import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import Resources from './Resources';

export const routes = [
  {
    path: '/' || '/home',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/functionalcomponent',
    exact: true,
    main: () => <FunctionalComponentDemo />
  },
  {
    path: '/resources',
    exact: true,
    main: () => <Resources />
  },
]