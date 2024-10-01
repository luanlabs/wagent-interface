'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { MultiValue } from 'react-select';
import { useRouter } from 'next/navigation';

import CCard from '@/components/CCard';
import { Pages } from '@/constants/pages';
import CButton from '@/components/CButton';
import CMethods from '@/components/CMethods';
import CCheckbox from '@/components/CCheckbox';
import CInputCopyPaste from '@/components/CInputCopyPaste';
import CItemField from '@/components/CItemField';
import EditProfile from '@/containers/EditProfile';
import CNumberInput from '@/components/CNumberInput';
// import useCheckboxColors from '@/hooks/useCheckboxColors';
import CRadioButtonGroup from '@/components/CRadioButtonGroup';
import CSelectSearchable from '@/components/CSelectSearchable';

import { BasicOptionType } from '@/models';
import { ISettingData, ITokenServerType } from '@/constants/types';
import { useGetTokensQuery, useUpdateUserMutation } from '@/services/userApi';

const switchOptions = [
  { value: 'off', label: 'OFF' },
  { value: 'on', label: 'ON' },
];

type SettingsProps = {
  data: ISettingData;
  isEditProfileOpen: boolean;
  setIsEditProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsForm = ({ data, setIsEditProfileOpen, isEditProfileOpen }: SettingsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<BasicOptionType<string>>>([]);

  const [formState, setFormState] = useState({
    methods: 1,
    name: data.name,
    logo: data.logo,
    tokens: data.tokens,
    walletAddress: data.walletAddress,
    apiKeyValue: data.apiKey,
    isSubscribed: data.isSubscribed,
    minimumCancellableStreamDuration: data.minimumCancellableStreamDuration,
  });

  const { data: tokenData } = useGetTokensQuery();

  const options: BasicOptionType<string>[] = Array.isArray(tokenData?.result)
    ? tokenData.result.map((item: ITokenServerType) => ({
        value: item._id,
        label: item.symbol,
      }))
    : [];

  const router = useRouter();
  // TODO fix methods
  // const checkBoxColors = useCheckboxColors(formState.isStreamChecked, formState.isVestingChecked);

  const [updateUser, { isError }] = useUpdateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));

    updateUser({ [name]: value.trim() });
  };

  const handleSelectChange = (value: MultiValue<BasicOptionType<string>>) => {
    setSelectedOptions(value);

    const selectedTokensId = value.map((x) => x.value);

    updateUser({
      tokens: selectedTokensId,
    });
  };

  const handleProfileChange = (storeName: string, storeLogo: string | ArrayBuffer | null) => {
    setFormState((prevState) => ({
      ...prevState,
      name: storeName,
      logo: typeof storeLogo === 'string' ? storeLogo : '',
    }));

    updateUser({
      name: storeName,
      logo: typeof storeLogo === 'string' ? storeLogo : '',
    });
  };

  const handleRadioChange = (option: BasicOptionType<string>) => {
    setFormState((prevState) => ({
      ...prevState,
      isSubscribed: option.value === 'on' ? true : false,
    }));

    updateUser({
      isSubscribed: option.value === 'on' ? true : false,
    });
  };

  const ModalOnClose = () => {
    setIsEditProfileOpen(false);
  };

  const handleSignOut = () => {
    Cookies.remove('token');
    setTimeout(() => {
      router.push(Pages.SIGNIN);
    }, 1000);
  };

  if (isError) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-error text-lg">Updating account settings failed!</p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <CItemField
        title="Acceptable payment methods"
        description="Please choose one or more methods."
      >
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
            name="isStreamChecked"
            value="stream"
            label={
              <CMethods
                suffix="Method"
                method="stream"
                // fill={checkBoxColors.streamIconColor}
                // className={checkBoxColors.streamTextColor}
              />
            }
            disabled
            checked={false}
            onChange={handleChange}
          />
          <CCheckbox
            type="secondary"
            name="isVestingChecked"
            value="vesting"
            label={
              <CMethods
                suffix="Method"
                method="vesting"
                // fill={checkBoxColors.vestingIconColor}
                // className={checkBoxColors.vestingTextColor}
              />
            }
            disabled
            checked={false}
            onChange={handleChange}
          />
        </div>
      </CItemField>

      <form className="space-y-3">
        <CItemField
          title="Enter your stellar wallet"
          description="Please enter your wallet address (you can change it but api key will be regenerated)."
        >
          <div className="w-[356px]">
            <CInputCopyPaste
              mode="paste"
              type="text"
              name="walletAddress"
              value={formState.walletAddress}
              placeholder="Enter Wallet Address"
              onChange={handleChange}
            />
          </div>
        </CItemField>

        <CItemField
          title="Minimum cancellable duration"
          description="Please select the acceptable time period for client payment cancellations."
        >
          <div className="w-[100px]">
            <CNumberInput
              name="minimumDuration"
              defaultValue={formState.minimumCancellableStreamDuration.toString()}
              placeholder="10"
              onChange={handleChange}
            />
          </div>
        </CItemField>

        <CItemField
          title="Email Notifications"
          description="Please choose if you'd like to get Email notifications."
        >
          <div className="w-[150px]">
            <CRadioButtonGroup
              options={switchOptions}
              defaultOption={formState.isSubscribed ? switchOptions[1] : switchOptions[0]}
              onChange={handleRadioChange}
            />
          </div>
        </CItemField>

        <CItemField
          title="API Key"
          description="*This Api key is generated based on your wallet address."
        >
          <div className="w-[356px]">
            <CInputCopyPaste
              mode="copy"
              type="apiKey"
              name="apiKeyValue"
              hideCharacter
              eyeIconPosition="left"
              value={formState.apiKeyValue}
              placeholder="Your api key"
              className="!cursor-pointer"
            />
          </div>
        </CItemField>

        <CItemField
          title="Acceptable Tokens"
          description="Please choose one or more tokens you'd accept."
        >
          <div className="w-[356px]">
            <CSelectSearchable
              options={options}
              onChange={handleSelectChange}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
        </CItemField>
      </form>

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

      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={ModalOnClose}
        data={data}
        onProfileChange={handleProfileChange}
      />
    </div>
  );
};

export default SettingsForm;
