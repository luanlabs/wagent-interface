'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { setProfile, clearProfile } from '@/reducers/profile';
import CButton from '@/components/CButton';
import CModal from '@/components/CModal';
import CInput from '@/components/CInput';
import shop from 'public/images/shop.svg';
import { IUserInfo } from '@/constants/types';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
  data: IUserInfo;
  onProfileChange: (storeName: string, storeLogo?: string | ArrayBuffer | null) => void;
}

const EditProfile = ({ isOpen, onClose, data, onProfileChange }: EditProfileProps) => {
  const dispatch = useAppDispatch();
  const [storeName, setStoreName] = useState(data.name);
  const [storeLogo, setStoreLogo] = useState(data.logo);
  const [newLogo, setNewLogo] = useState<string | ArrayBuffer | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (storeLogo) {
      dispatch(setProfile({ storeName, storeLogo }));
    }
    dispatch(setProfile({ storeName }));
  }, [data, dispatch, storeLogo, storeName]);

  const handleProfileChange = () => {
    const updatedLogo = newLogo || storeLogo;
    setStoreLogo(updatedLogo as string);
    dispatch(setProfile({ storeName, storeLogo: updatedLogo }));
    if (updatedLogo) {
      onProfileChange(storeName, updatedLogo);
    }
    onProfileChange(storeName);
    onClose();
  };

  const handleLogoRemove = () => {
    dispatch(clearProfile());
    const defaultLogo = '/images/default.jpg';
    setStoreName('');
    setStoreLogo(defaultLogo);
    setNewLogo(null);

    onProfileChange('', defaultLogo);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!file.type.startsWith('image/')) {
        console.error('Invalid file type. Please upload an image.');
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setNewLogo(reader.result as string);
      };
      reader.onerror = () => {
        console.error('Error reading file');
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <CModal title="Edit Profile" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="mb-4">
          <p className="text-base select-none font-normal text-offBlack mb-[6px]">Store logo</p>
          <div className="flex w-full items-center">
            <div className="h-[50px] w-[50px] mr-4">
              <Image
                src={typeof newLogo === 'string' ? newLogo : storeLogo || shop}
                priority
                quality={100}
                width={50}
                height={50}
                alt="Store Logo"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <CButton
                variant="outline"
                text="Change"
                className="!w-[103px]"
                onClick={() => fileInputRef.current?.click()}
              />
              <CButton
                variant="outline"
                text="Remove"
                className="!w-[103px]"
                onClick={handleLogoRemove}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Shop name</p>
          <CInput
            placeholder="Your shop's name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            border
          />
        </div>

        <CButton variant="add" text="Change" onClick={handleProfileChange} />
      </div>
    </CModal>
  );
};

export default EditProfile;
