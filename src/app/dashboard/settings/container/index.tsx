'use client';

import React, { useState } from 'react';

import { UserDataProps } from '@/models';
import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';

import SettingsForm from './form';

const SettingsContainer = ({ user }: UserDataProps) => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

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
      <SettingsForm
        data={user}
        setIsEditProfileOpen={setIsEditProfileOpen}
        isEditProfileOpen={isEditProfileOpen}
      />
    </CPageCard>
  );
};

export default SettingsContainer;
