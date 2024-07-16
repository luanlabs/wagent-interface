import type { Metadata } from 'next';

import SettingsContainer from '@/containers/SettingsContainer';

export const metadata: Metadata = {
  title: 'Wagent - Settings',
};

export default function Settings() {
  return <SettingsContainer />;
}
