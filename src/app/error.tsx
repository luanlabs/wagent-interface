'use client';

import { Failed } from '@/assets';

export default function Error() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen">
      <Failed />
      <p>something went wrong!</p>
    </div>
  );
}
