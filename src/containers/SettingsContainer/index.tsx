'use client';

import React, { useState } from 'react';

import CCard from '@/components/CCard';
import CButton from '@/components/CButton';
import CCheckbox from '@/components/CCheckbox';
import CPageCard from '@/components/CPageCard';
import CMethods from '@/components/CMethods';
import CInput from '@/components/CInput';
import copyText from '@/utils/copyText';

const pageTitle = (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>Settings</h1>
    <CButton variant="add" text="Edit profile" className="!w-[130px] text-base" />
  </div>
);

const SettingsContainer = () => {
  const [apiKeyValue, setApiKeyValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const isChecked = true;
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
  };

  const handleApiKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyValue(e.target.value);
  };

  const handleWalletAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleCopyApi = () => {
    copyText(apiKeyValue);
  };

  const handleCopyWalletAddress = () => {
    copyText(walletAddress);
  };

  return (
    <CPageCard title={pageTitle}>
      {/* <p className="text-[#101828] text-2xl mb-3">Payment Preferences</p> */}

      <div className="space-y-3">
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
            <p className="text-lg">Connect your stellar wallet</p>
            <p className="text-cadetBlue text-sm">Please Choose one or more tokens.</p>
          </div>
          <div className="inline-flex gap-2">
            <div className="w-[356px]">
              <CInput
                inputClassName="!border-gray"
                placeholder="Enter Wallet Address"
                onChange={handleWalletAddress}
                copyOnClick={handleCopyWalletAddress}
                copy
              />
            </div>
          </div>
        </CCard>

        <CCard className="flex justify-between p-6">
          <div className="flex flex-col">
            <p className="text-lg">API Key</p>
            <p className="text-cadetBlue text-sm">
              We will send extra notifications for you in your email.
            </p>
          </div>
          <div className="inline-flex gap-2">
            <div className="w-[356px]">
              <CInput
                inputClassName="!border-gray"
                placeholder="Your Api Key"
                onChange={handleApiKey}
                copyOnClick={handleCopyApi}
                copy
                hideCharacter
              />
            </div>
          </div>
        </CCard>
      </div>
    </CPageCard>
  );
};

export default SettingsContainer;
