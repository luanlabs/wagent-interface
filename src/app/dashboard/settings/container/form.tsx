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

import { BasicOptionType, OptionType } from '@/models';
import { ISettingData } from '@/constants/types';
import { useUpdateUserMutation } from '@/services/userApi';

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
  const options: BasicOptionType<string>[] = data.tokens.map((item) => ({
    value: item.symbol,
    label: item.symbol,
  }));
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<BasicOptionType<string> | OptionType>
  >([]);
  const [formState, setFormState] = useState({
    methods: 1,
    name: data.name,
    logo: data.logo,
    tokens: data.tokens,
    walletAddress: '',
    apiKeyValue: data.apiKey,
    isSubscribed: data.isSubscribed,
    minimumCancellableStreamDuration: data.minimumCancellableStreamDuration,
  });

  const router = useRouter();
  // TODO fix methods
  // const checkBoxColors = useCheckboxColors(formState.isStreamChecked, formState.isVestingChecked);

  const [updateUser, { isLoading, isError, isSuccess, error }] = useUpdateUserMutation();

  const payload = {
    name: formState.name,
    logo: formState.logo,
    tokens: formState.tokens,
    methods: formState.methods,
    isSubscribed: formState.isSubscribed,
    walletAddress: formState.walletAddress,
    minimumCancellableStreamDuration: formState.minimumCancellableStreamDuration,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));

    console.log(formState);
    updateUser(payload).unwrap();
  };

  const handleSelectChange = (value: MultiValue<BasicOptionType<string>>) => {
    setFormState((prevState) => ({
      ...prevState,
      tokens: value as BasicOptionType<string>[],
    }));
  };

  const handleProfileChange = (storeName: string, storeLogo: string | ArrayBuffer | null) => {
    setFormState((prevState) => ({
      ...prevState,
      name: storeName,
      logo: typeof storeLogo === 'string' ? storeLogo : '',
    }));
  };

  const handleRadioChange = (option: BasicOptionType<string>) => {
    setFormState((prevState) => ({
      ...prevState,
      isSubscribed: option.value === 'on' ? true : false,
    }));
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
              placeholder="your api key"
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
