'use client';

import React, { useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import { MultiValue } from 'react-select';
import { useRouter } from 'next/navigation';
import { StrKey } from '@stellar/stellar-sdk';

import { Pages } from '@/constants/pages';
import CButton from '@/components/CButton';
import CMethods from '@/components/CMethods';
import CCheckbox from '@/components/CCheckbox';
import CInputCopy from '@/components/CInputCopy';
import CItemField from '@/components/CItemField';
import EditProfile from '@/containers/EditProfile';
import CNumberInput from '@/components/CNumberInput';
import useCheckboxColors from '@/hooks/useCheckboxColors';
import CRadioButtonGroup from '@/components/CRadioButtonGroup';
import CSelectSearchable from '@/components/CSelectSearchable';
import { BasicOptionType } from '@/models';
import { IUserInfo, ITokenServerType } from '@/constants/types';
import {
  useGetTokensQuery,
  useUpdateApiKeyMutation,
  useUpdateUserMutation,
} from '@/services/userApi';

const switchOptions = [
  { value: 'off', label: 'OFF' },
  { value: 'on', label: 'ON' },
];

type SettingsProps = {
  data: IUserInfo;
  isEditProfileOpen: boolean;
  setIsEditProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsForm = ({ data, setIsEditProfileOpen, isEditProfileOpen }: SettingsProps) => {
  const { data: tokenData } = useGetTokensQuery();

  const options: BasicOptionType<string>[] = Array.isArray(tokenData?.result)
    ? tokenData.result.map((item: ITokenServerType) => ({
        value: item._id,
        label: item.symbol.toUpperCase(),
      }))
    : [];

  const [selectedOptions, setSelectedOptions] = useState<MultiValue<BasicOptionType<string>>>(
    data.tokens.map((item) => ({
      value: item._id,
      label: item.symbol,
    })),
  );

  const [formState, setFormState] = useState({
    name: data.name,
    logo: data.logo,
    tokens: data.tokens,
    isSingleChecked: true,
    address: data.address,
    methods: data.methods,
    isVestingChecked: false,
    apiKeyValue: data.apiKey,
    isSubscribed: data.isSubscribed,
    isStreamChecked: data.methods === 3 ? true : false,
    minimumCancellableStreamDuration: data.minimumCancellableStreamDuration,
  });

  const [addressError, setAddressError] = useState<string | null>(null);

  const router = useRouter();
  const checkBoxColors = useCheckboxColors(formState.isStreamChecked, formState.isVestingChecked);

  const [updateUser, { isError }] = useUpdateUserMutation();
  const [updateApiKey] = useUpdateApiKeyMutation();

  const validateAddress = (address: string): boolean => {
    return StrKey.isValidEd25519PublicKey(address);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const parsedValue =
      name === 'minimumCancellableStreamDuration'
        ? value.trim() === ''
          ? 0
          : Number(value)
        : value.trim();

    setFormState((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;

    setFormState((prevState) => ({
      ...prevState,
      address: newAddress,
    }));

    if (!validateAddress(newAddress)) {
      setAddressError('This address is not valid.');
    } else {
      setAddressError(null);
      updateUser({ address: newAddress });
    }
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

  const handleStreamCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      isStreamChecked: e.target.checked,
      methods: e.target.checked ? 3 : 1,
    }));

    if (e.target.checked) {
      updateUser({
        methods: 3,
      });
    } else {
      updateUser({
        methods: 1,
      });
    }
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

  const handleSignOut = useCallback(() => {
    Cookies.remove('token');
    router.push(Pages.SIGNIN);
  }, [router]);

  const handleRegenerate = () => {
    updateApiKey()
      .unwrap()
      .then((res) => {
        const newApiKey = res.result;
        if (newApiKey) {
          setFormState((prevState) => ({
            ...prevState,
            apiKeyValue: newApiKey,
          }));
        } else {
          console.error('API key regeneration failed: No key returned in the response');
        }
      });
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
      <form className="space-y-3">
        <CItemField title="Acceptable payment methods" description="Choose which method to accept.">
          <div className="inline-flex gap-[12px] w-full mobile:flex-col mobile:space-y-2">
            <CCheckbox
              type="secondary"
              value="single"
              label={<CMethods suffix="Method" method="single" />}
              checked={formState.isSingleChecked}
              onChange={handleChange}
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
                  fill={checkBoxColors.streamIconColor}
                  className={checkBoxColors.streamTextColor}
                />
              }
              checked={formState.isStreamChecked}
              onChange={handleStreamCheck}
            />
            <CCheckbox
              type="secondary"
              name="isVestingChecked"
              value="vesting"
              label={
                <CMethods
                  suffix="Method"
                  method="vesting"
                  fill={checkBoxColors.vestingIconColor}
                  className={`${formState.isVestingChecked && '!text-[#101828]'}`}
                />
              }
              disabled
              checked={formState.isVestingChecked}
              onChange={handleChange}
            />
          </div>
        </CItemField>

        <CItemField
          title="Enter your stellar wallet"
          description="Your wallet address for receiving payments. Ensure it's valid."
        >
          <div className="w-[400px] short:w-[320px]">
            <CInputCopy
              name="address"
              value={formState.address}
              placeholder="Enter Wallet Address"
              onChange={handleAddressChange}
            />
            {addressError && <p className="!text-[12px] text-error mt-1">{addressError}</p>}
          </div>
        </CItemField>

        <CItemField
          title="Minimum cancellable duration"
          description="Set the minimum time before a stream payment can be cancelled."
        >
          <div className="w-[100px]">
            <CNumberInput
              name="minimumCancellableStreamDuration"
              defaultValue={formState.minimumCancellableStreamDuration}
              placeholder="10"
              onChange={handleChange}
            />
          </div>
        </CItemField>

        <CItemField
          title="Email Notifications"
          description="Get notified about transactions and account updates via email."
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
          description={
            <p className="desktop:whitespace-nowrap">
              Connect Wagent to your shop. Keep it secure, and{' '}
              <span
                onClick={handleRegenerate}
                className="text-emeraldGreen font-medium hover:text-emerald-800 cursor-pointer transition-colors duration-300"
              >
                regenerate
              </span>{' '}
              only if needed.
            </p>
          }
        >
          <div className="w-[400px] short:w-[320px]">
            <CInputCopy
              name="apiKeyValue"
              hideCharacter
              eyeIconPosition="left"
              value={formState.apiKeyValue}
              placeholder="Your api key"
              className="!cursor-pointer"
            />
          </div>
        </CItemField>

        <CItemField title="Acceptable Tokens" description="Choose which tokens to accept.">
          <div className="w-[400px] short:w-[320px]">
            <CSelectSearchable
              options={options}
              onChange={handleSelectChange}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
        </CItemField>
      </form>

      <div className="pb-2">
        <CItemField title="Sign out of wagent">
          <div className="w-[300px] mobile:w-[200px]">
            <CButton
              onClick={handleSignOut}
              variant="simple"
              text="Sign out"
              className="w-full bg-lightestRed border border-lightRed text-error"
            />
          </div>
        </CItemField>
      </div>

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
