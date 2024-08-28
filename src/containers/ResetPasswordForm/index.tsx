'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import { Typography } from '@/assets';
import Pages from '@/constants/pages';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import { composeValidators } from '@/utils/composeValidators';
import ResetPasswordRequest from '@/services/resetPasswordRequest';
import { minLength, required, validatePassword } from '@/utils/validators';
import CLoadingModal from '@/components/CLoadingModal';
import { customResponse, IUserForgotMessage } from '@/constants/types';

const ResetPasswordForm = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState<customResponse>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (email: string) => {
    const { message } = await ResetPasswordRequest<IUserForgotMessage>(email);
    if (message) {
      setIsOpen(true);
    }
    if (message === 'Password has been reset') {
      setResponse({
        status: 'success',
        title: 'Password has been reset',
        message: 'Wait until we will redirect you to sign in.',
      });
      setTimeout(() => {
        handleCloseModal();
        router.push(Pages.SIGNIN);
      }, 3000);
    } else if (message === 'Invalid or expired token') {
      setResponse({
        status: 'error',
        title: 'Error',
        message: 'Invalid password or expired token, Try again.',
      });
    } else {
      setResponse({ status: 'error', title: 'Error', message: 'Error occurred!' });
    }
  };

  const handleRedirectToSignIn = () => {
    router.push(Pages.SIGNIN);
  };

  return (
    <div className="flex flex-col bg-white h-full rounded-3xl px-8 py-7 shadow-md mobile:shadow-none mobile:px-0 mobile:py-3 mobile:rounded-none">
      <div className="flex justify-start items-start">
        <Typography />
      </div>
      <div className="flex justify-center mobile:items-start mobile:mt-12 short:items-center short:mt-0 desktop:mt-[30%] bigScreen:mt-[38%] h-full">
        <div className="flex flex-col w-full">
          <div className="mb-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Reset password</p>
          </div>
          <Form
            onSubmit={onSubmit}
            keepDirtyOnReinitialize
            render={({ handleSubmit, submitError, submitting, pristine, invalid }) => (
              <form onSubmit={handleSubmit} autoComplete="false">
                <div className="space-y-3 w-full">
                  <Field
                    name="newPassword"
                    validate={composeValidators(required, minLength(8), validatePassword)}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="password"
                        placeholder="Enter your new Password"
                        meta={meta}
                        hideCharacter
                        eyeIconPosition="right"
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />
                </div>

                <div className="w-full">
                  <CButton
                    variant="confirm"
                    text="Reset Password"
                    className="mt-3"
                    type="submit"
                    disabled={pristine || submitError || submitting || invalid}
                  />
                </div>
              </form>
            )}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-sm select-none text-smokyBlue">Remembered your password?</p>

        <CButton
          text="Sign in"
          variant="outline"
          className="!w-1/3"
          onClick={handleRedirectToSignIn}
        />
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
    </div>
  );
};

export default ResetPasswordForm;
