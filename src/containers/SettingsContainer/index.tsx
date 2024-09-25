'use client';

import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import CCard from '@/components/CCard';
import { Pages } from '@/constants/pages';
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
import { ISettingData } from '@/constants/types';

const options: BasicOptionType<string>[] = [
  { value: 'usdt', label: 'USDT' },
  { value: 'usdc', label: 'USDC' },
  { value: 'dai', label: 'DAI' },
];

const switchOptions = [
  { value: 'off', label: 'OFF' },
  { value: 'on', label: 'ON' },
];

type SettingsProps = {
  data: ISettingData;
};
const SettingsContainer = ({ data }: SettingsProps) => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isStreamChecked, setIsStreamChecked] = useState(false);
  const [isVestingChecked, setIsVestingChecked] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState(data.apiKey);
  const [walletAddress, setWalletAddress] = useState(data.email);

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
    Cookies.remove('token');

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
          description="Please choose one or more methods."
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
                disabled
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
                disabled
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
          title="Enter your stellar wallet"
          description="Please enter your wallet address (you can change it but api key will be regenerated)."
          component={
            <div className="w-[356px]">
              <CInputCopy
                type="email"
                value={walletAddress}
                placeholder="Enter Wallet Address"
                onChange={handleWalletAddress}
              />
            </div>
          }
        />

        <CItemField
          title="Minimum cancellable duration"
          description="Please select the acceptable time period for client payment cancellations."
          component={
            <div className="w-[100px]">
              <CNumberInput
                defaultValue={data.minimumCancellableStreamDuration.toString()}
                placeholder="45"
              />
            </div>
          }
        />

        <CItemField
          title="Email Notifications"
          description="Please choose if you'd like to get Email notifications."
          component={
            <div className="w-[150px]">
              <CRadioButtonGroup
                options={switchOptions}
                defaultOption={data.isSubscribed ? switchOptions[1] : switchOptions[0]}
                onChange={handleCRadioButtons}
              />
            </div>
          }
        />

        <CItemField
          title="API Key"
          description="*This Api key is generated based on your wallet address."
          component={
            <div className="w-[356px]">
              <CInputCopy
                type="apiKey"
                hideCharacter
                value={apiKeyValue}
                eyeIconPosition="left"
                placeholder="your api key"
                onChange={handleApiKey}
              />
            </div>
          }
        />

        <CItemField
          title="Acceptable Tokens"
          description="Please choose one or more tokens you'd accept."
          component={
            <div className="w-[356px]">
              <CSelectSearchable options={options} />
            </div>
          }
        />

        <CCard className="flex w-full justify-between items-center p-6 !mb-2">
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

        <EditProfile isOpen={isEditProfileOpen} onClose={ModalOnClose} data={data} />
      </div>
    </CPageCard>
  );
};

export default SettingsContainer;
