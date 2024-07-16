import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';
import React from 'react';

const pageTitle = (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>Settings</h1>
    <CButton variant="add" text="Edit profile" className="!w-[130px] text-base" />
  </div>
);

const SettingsContainer = () => {
  return <CPageCard title={pageTitle}> Settings</CPageCard>;
};

export default SettingsContainer;
