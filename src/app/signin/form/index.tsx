'use client';

import React, { useState } from 'react';

import CButton from '@/components/CButton';
import CCheckbox from '@/components/CCheckbox';
import useBluxWagentAuth from '@/hooks/useBluxWagentAuth';
import CLoadingModal from '@/components/CLoadingModal';

const SignInForm = () => {
  const [isRememberChecked, setIsRememberChecked] = useState(true);
  const { authenticate, isReady, isBusy, isOpen, response, handleCloseModal } = useBluxWagentAuth({
    remember: isRememberChecked,
  });

  return (
    <>
      <div className="relative flex-col h-full justify-between">
        <div>
          <div className="my-4 space-y-3">
            <p className="text-2xl font-medium text-darkGreen select-none">Continue with Blux</p>
            <p className="text-sm text-smokyBlue leading-6">
              New and returning stores use the same Blux login. Your Stellar address comes from
              Blux and is used for withdrawals.
            </p>
          </div>

          <div className="w-full mt-6 space-y-3">
            <CCheckbox
              label={<p className="!text-smokyBlue">Remember me</p>}
              checked={isRememberChecked}
              onChange={(e) => setIsRememberChecked(e.target.checked)}
              value="remember"
              className="-ml-[6px]"
            />

            <CButton
              variant="confirm"
              text={isBusy ? 'Connecting...' : 'Continue with Blux'}
              className="mt-4"
              type="button"
              disabled={!isReady || isBusy}
              onClick={authenticate}
            />
          </div>
        </div>
      </div>

      <CLoadingModal
        isOpen={isOpen}
        title={response.title}
        onClose={handleCloseModal}
        className="!w-[400px] mobile:!w-[310px]"
        description={response.message}
        failed={response.status === 'error'}
        success={response.status === 'success'}
      />
    </>
  );
};

export default SignInForm;
