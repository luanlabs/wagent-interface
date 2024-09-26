import type { Metadata } from 'next';

import React from 'react';
import SettingsContainer from './container';

export const metadata: Metadata = {
  title: 'Wagent - Settings',
};

export default function Settings() {
  return <SettingsContainer />;
}
