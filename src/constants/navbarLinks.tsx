import React from 'react';

import { CNavLinkProps as Type } from './types';

import HomeIcon from 'src/assets/Home';
import StairsIcon from 'src/assets/Stairs';
import CalenderIcon from 'src/assets/Calender';
import SettingsIcon from 'src/assets/Settings';

import { Pages } from './pages';

export const navLinks: Type[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon fill="#E4F9F1" />,
    activeIcon: <HomeIcon />,
    url: Pages.DASHBOARD,
  },
  {
    title: 'Shop',
    icon: <StairsIcon fill="#E4F9F1" />,
    activeIcon: <StairsIcon />,
    url: Pages.SHOP,
  },
  {
    title: 'History',
    icon: <CalenderIcon fill="#E4F9F1" />,
    activeIcon: <CalenderIcon />,
    url: Pages.HISTORY,
  },
  {
    title: 'Address Book',
    icon: <SettingsIcon fill="#E4F9F1" />,
    activeIcon: <SettingsIcon />,
    url: Pages.SETTINGS,
  },
];
