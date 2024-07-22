'use client';

import React from 'react';

import CCard from '@/components/CCard';
import CButton from '@/components/CButton';
import CCheckbox from '@/components/CCheckbox';
import CPageCard from '@/components/CPageCard';
import CMethods from '@/components/CMethods';
import CRadioButtonGroup from '@/components/CRadioButtonGroup';

const pageTitle = (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>Settings</h1>
    <CButton variant="add" text="Edit profile" className="!w-[130px] text-base" />
  </div>
);

const SwitchValue = [
  { value: 'on', label: 'ON' },
  { value: 'off', label: 'OFF' },
];

const SettingsContainer = () => {
  const isChecked = true;
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
  };

  return (
    <CPageCard title={pageTitle}>
      {/* <p className="text-[#101828] text-2xl mb-3">Payment Preferences</p> */}
      <CCard className="flex justify-between p-6">
        <div className="flex flex-col">
          <p className="text-lg">Acceptable payment methods</p>
          <p className="text-cadetBlue text-sm">Please Choose one or more methods.</p>
        </div>
        <div className="inline-flex gap-2">
          <CCheckbox
            type="secondary"
            value="stream"
            label={<CMethods suffix="Method" method="stream" />}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          <CCheckbox
            type="secondary"
            value="single"
            label={<CMethods suffix="Method" method="single" />}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          <CCheckbox
            type="secondary"
            value="vesting"
            label={<CMethods suffix="Method" method="vesting" />}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
        </div>
      </CCard>

      <CCard className="flex justify-between p-6">
        <div className="flex flex-col">
          <p className="text-lg">Email Notifications</p>
          <p className="text-cadetBlue text-sm">
            We will send extra notifications for you in your email.
          </p>
        </div>
        <div className="inline-flex gap-2">
          <div className="w-[150px]">
            <CRadioButtonGroup value={SwitchValue} defaultSelectedTab="off" />
          </div>
        </div>
      </CCard>
    </CPageCard>
  );
};

export default SettingsContainer;
