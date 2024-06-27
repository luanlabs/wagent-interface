import React from 'react';

import { Home, Basket, Calender, Settings } from '@/assets';

import Pages from './pages';
import { CNavLinkProps as Type } from './types';

export const navLinks: Type[] = [
  {
    title: 'Dashboard',
    icon: <Home fill="#E4F9F1" />,
    activeIcon: <Home />,
    url: Pages.DASHBOARD,
  },
  {
    title: 'History',
    icon: <Calender fill="#E4F9F1" />,
    activeIcon: <Calender />,
    url: Pages.HISTORY,
  },
  {
    title: 'Products',
    icon: <Basket fill="#E4F9F1" />,
    activeIcon: <Basket />,
    url: Pages.SHOP,
  },
  {
    title: 'Settings',
    icon: <Settings fill="#E4F9F1" />,
    activeIcon: <Settings />,
    url: Pages.SETTINGS,
  },
];
