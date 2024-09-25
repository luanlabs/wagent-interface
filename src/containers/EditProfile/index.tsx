import { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import { setProfile, clearProfile } from '@/reducers/profile';
import CButton from '@/components/CButton';
import CModal from '@/components/CModal';
import CInput from '@/components/CInput';
import { ISettingData } from '@/constants/types';

interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
  data: ISettingData;
}

const EditProfile = ({ isOpen, onClose, data }: EditProfileProps) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState(data.name);
  const [storeLogo, setStoreLogo] = useState(data.logo);
  const [newLogo, setNewLogo] = useState<string | ArrayBuffer | null>(null);

  const handleChange = () => {
    const logoToUpdate = newLogo || storeLogo;
    dispatch(setProfile({ storeName, storeLogo: logoToUpdate }));
    setStoreLogo(logoToUpdate as string);
    onClose();
  };

  const handleRemove = () => {
    dispatch(clearProfile());
    setStoreName('');
    setStoreLogo('/images/default.jpg');
    setNewLogo(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewLogo(reader.result);
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
                src={newLogo ? newLogo : storeLogo}
                priority
                quality={100}
                width={0}
                height={0}
                alt="Store Logo"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="fileInput"
                onChange={handleFileChange}
              />
              <CButton
                variant="outline"
                text="Change"
                className="!w-[103px]"
                onClick={() => document.getElementById('fileInput')?.click()}
              />
              <CButton
                variant="outline"
                text="Remove"
                className="!w-[103px]"
                onClick={handleRemove}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Shop name</p>
          <CInput
            placeholder="Amanda shop"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            border
          />
        </div>

        <CButton variant="add" text="Change" onClick={handleChange} />
      </div>
    </CModal>
  );
};

export default EditProfile;
