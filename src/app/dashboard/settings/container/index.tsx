'use client';

import React, { useState } from 'react';

import CButton from '@/components/CButton';

import CPageCard from '@/components/CPageCard';

import { ISettingData } from '@/constants/types';
import { useGetUserQuery } from '@/services/userApi';

import SettingsForm from './form';

const SettingsContainer = () => {
  const { data, isLoading, error } = useGetUserQuery();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  if (error) {
    throw error;
  }

  const pageTitle = (
    <div className="flex justify-between items-center w-full -my-1">
      <h1>Settings</h1>
      <CButton
        variant="add"
        text="Edit profile"
        className="!w-[130px] text-base"
        onClick={() => setIsEditProfileOpen(true)}
      />
    </div>
  );

  return (
    <CPageCard title={pageTitle}>
      {!isLoading ? (
        <SettingsForm
          data={data?.result as ISettingData}
          setIsEditProfileOpen={setIsEditProfileOpen}
          isEditProfileOpen={isEditProfileOpen}
        />
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <p className="text-cadetBlue text-lg">Loading settings</p>
        </div>
      )}
    </CPageCard>
  );
};

export default SettingsContainer;
