import Image from 'next/image';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Profile = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="flex items-center">
      <div className="h-[44px] w-[44px] object-cover mr-4">
        <Image
          src={profile.shopLogo}
          width={44}
          height={44}
          alt="Store Logo"
          className="rounded-full"
        />
      </div>
      <label className="text-[14px] text-darkBlue">{profile.shopName}</label>
    </div>
  );
};

export default Profile;
