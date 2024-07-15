'use client';

import { useState } from 'react';

import CButton from '@/components/CButton';
import CLoadingModal from '@/components/CLoadingModal';

const LoadingTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successLoading, setSuccessLoading] = useState(false);
  const [failedLoading, setFailedLoading] = useState(false);

  const handleLoadingTest = () => {
    setIsOpen(true);
    setSuccessLoading(false);
    setFailedLoading(false);

    setTimeout(() => {
      setSuccessLoading(true);

      setTimeout(() => {
        setSuccessLoading(false);
        setFailedLoading(true);
      }, 3000);
    }, 3000);
  };

  const handleOnCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <CButton
        variant="outline"
        text="Loading Test"
        onClick={handleLoadingTest}
        className="!w-[200px] my-2"
      />

      <CLoadingModal
        isOpen={isOpen}
        onClose={handleOnCloseModal}
        title="Your order is submited"
        description="Thanks for your order Please wait while we’re trying redirect back
        you to where you came from!"
        success={successLoading}
        failed={failedLoading}
      />
    </div>
  );
};

export default LoadingTest;
