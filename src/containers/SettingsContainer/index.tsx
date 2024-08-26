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
import useCheckboxColors from './useCheckboxColors';
import CItemField from '@/components/CItemField';

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
  const [isStreamChecked, setIsStreamChecked] = useState(false);
  const [isVestingChecked, setIsVestingChecked] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const router = useRouter();
  const checkBoxColors = useCheckboxColors(isStreamChecked, isVestingChecked);

  const handleStreamCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsStreamChecked(e.target.checked);
  };

  const handleVestingCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVestingChecked(e.target.checked);
  };

  const handleApiKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyValue(e.target.value.trim());
  };

  const handleWalletAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value.trim());
  };

  const handleCRadioButtons = (e: BasicOptionType<string>) => {};

  const handleSignOut = () => {
    if (localStorage.getItem('token') === null) {
      sessionStorage.clear();
    } else {
      localStorage.clear();
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
        <CItemField
          title="Acceptable payment methods"
          description="Please Choose one or more methods."
          component={
            <div className="inline-flex gap-[12px] w-full mobile:flex-col mobile:space-y-2">
              <CCheckbox
                type="secondary"
                value="single"
                label={<CMethods suffix="Method" method="single" />}
                checked
                disabled
              />
              <CCheckbox
                type="secondary"
                value="stream"
                label={
                  <CMethods
                    suffix="Method"
                    method="stream"
                    fill={checkBoxColors.streamIconColor}
                    className={checkBoxColors.streamTextColor}
                  />
                }
                checked={isStreamChecked}
                onChange={handleStreamCheck}
              />

              <CCheckbox
                type="secondary"
                value="vesting"
                label={
                  <CMethods
                    suffix="Method"
                    method="vesting"
                    fill={checkBoxColors.vestingIconColor}
                    className={checkBoxColors.vestingTextColor}
                  />
                }
                checked={isVestingChecked}
                onChange={handleVestingCheck}
              />
            </div>
          }
        />

        <CItemField
          title="Connect your stellar wallet"
          description="Please Choose one or more tokens."
          component={
            <div className="w-[356px]">
              <CInputCopy placeholder="Enter Wallet Address" onChange={handleWalletAddress} />
            </div>
          }
        />

        <CItemField
          title="Minimum cancellable duration"
          description=" We will send extra notifications for you in your email."
          component={
            <div className="w-[100px]">
              <CNumberInput defaultValue="45" placeholder="45" />
            </div>
          }
        />

        <CItemField
          title="Email Notifications"
          description=" We will send extra notifications for you in your email."
          component={
            <div className="w-[150px]">
              <CRadioButtonGroup
                options={switchOptions}
                defaultOption={switchOptions[1]}
                onChange={handleCRadioButtons}
              />
            </div>
          }
        />

        <CItemField
          title="API Key"
          description=" We will send extra notifications for you in your email."
          component={
            <div className="w-[356px]">
              <CInputCopy placeholder="Your Api Key" onChange={handleApiKey} hideCharacter />
            </div>
          }
        />

        <CItemField
          title="Acceptable Tokens"
          description="Please Choose one or more tokens."
          component={
            <div className="w-[356px]">
              <CSelectSearchable options={options} />
            </div>
          }
        />

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
