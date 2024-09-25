'use client';

// import type { Metadata } from 'next';

import React from 'react';
import { useGetUserQuery } from '@/services/userApi';
import SettingsContainer from '@/containers/SettingsContainer';

// export const metadata: Metadata = {
//   title: 'Wagent - Settings',
// };

export default function Settings() {
  const { data, error, isLoading } = useGetUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user information</div>;

  return <SettingsContainer data={data?.result} />;
}
