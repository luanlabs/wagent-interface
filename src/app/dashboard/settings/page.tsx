import type { Metadata } from 'next';

import React from 'react';
import SettingsContainer from './container';
import UserDataProvider from '@/containers/UserDataProvider';

export const metadata: Metadata = {
  title: 'Wagent - Settings',
};

export default function Settings() {
  return <UserDataProvider child={SettingsContainer} />;
}
