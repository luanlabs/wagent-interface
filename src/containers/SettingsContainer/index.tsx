'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Pages from '@/constants/pages';
import CCard from '@/components/CCard';
import CButton from '@/components/CButton';
import CMethods from '@/components/CMethods';
import CCheckbox from '@/components/CCheckbox';
import CPageCard from '@/components/CPageCard';
import CInputCopy from '@/components/CInputCopy';
import CNumberInput from '@/components/CNumberInput';
import CRadioButtonGroup from '@/components/CRadioButtonGroup';
import CSelectSearchable from '@/components/CSelectSearchable';

import { BasicOptionType } from '@/models';
import EditProfile from '../EditProfile';

const options: BasicOptionType<string>[] = [
  { value: 'usdt', label: 'USDT' },
  { value: 'usdc', label: 'USDC' },
  { value: 'dai', label: 'DAI' },
];

const switchOptions = [
  { value: 'on', label: 'ON' },
  { value: 'off', label: 'OFF' },
];

const SettingsContainer = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const router = useRouter();

  const isChecked = true;
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
  };

  const handleApiKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyValue(e.target.value.trim());
  };

  const handleWalletAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value.trim());
  };

  const handleCRadioButtons = (e: BasicOptionType<string>) => {
    console.log(e);
  };

  const handleSignOut = () => {
    if (localStorage.getItem('token') === null) {
      sessionStorage.removeItem('token');
    } else {
      localStorage.removeItem('token');
    }

    setTimeout(() => {
      router.push(Pages.SIGNIN);
    }, 1000);
  };

  const ModalOnClose = () => {
    setIsEditProfileOpen(false);
  };

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
              <CInputCopy placeholder="Enter Wallet Address" onChange={handleWalletAddress} />
            </div>
          </div>
        </CCard>

        <CCard className="flex justify-between p-6">
          <div className="flex flex-col">
            <p className="text-lg">Minimum cancellable duration</p>
            <p className="text-cadetBlue text-sm">
              We will send extra notifications for you in your email.
            </p>
          </div>
          <div className="inline-flex gap-2">
            <div className="w-[100px]">
              <CNumberInput defaultValue="45" placeholder="45" />
            </div>
          </div>
        </CCard>

        <CCard className="flex justify-between p-6">
          <div className="flex flex-col">
            <p className="text-lg">Email Notifications</p>
            <p className="text-cadetBlue text-sm">
              We will send extra notifications for you in your email.
            </p>
          </div>
          <div className="w-[150px]">
            <CRadioButtonGroup
              options={switchOptions}
              defaultOption={switchOptions[1]}
              onChange={handleCRadioButtons}
            />
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
              <CInputCopy placeholder="Your Api Key" onChange={handleApiKey} hideCharacter />
            </div>
          </div>
        </CCard>

        <CCard className="flex justify-between p-6">
          <div className="flex flex-col">
            <p className="text-lg">Acceptable Tokens</p>
            <p className="text-cadetBlue text-sm">Please Choose one or more tokens. </p>
          </div>
          <div className="inline-flex gap-2">
            <div className="w-[356px]">
              <CSelectSearchable options={options} />
            </div>
          </div>
        </CCard>

        <CCard className="flex w-full justify-between items-center p-6">
          <div>
            <p className="text-lg">Sign out of Wagent</p>
          </div>
          <div className="w-1/5 mobile:w-[120px]">
            <CButton
              onClick={handleSignOut}
              variant="simple"
              text="Sign out"
              className="w-full bg-lightestRed border border-lightRed text-error"
            />
          </div>
        </CCard>

        <EditProfile isOpen={isEditProfileOpen} onClose={ModalOnClose} />
      </div>
    </CPageCard>
  );
};

export default SettingsContainer;
