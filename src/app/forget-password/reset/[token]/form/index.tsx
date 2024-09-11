'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import { Pages } from '@/constants/pages';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import CLoadingModal from '@/components/CLoadingModal';
import { CustomResponse, ErrorMsg } from '@/constants/types';
import { minLength, required, validatePassword } from '@/utils/validators';
import { composeValidators } from '@/utils/composeValidators';
import resetPasswordRequest from '@/services/resetPasswordRequest';

type PasswordValues = {
  newPassword: string;
  confirmNewPassword: string;
};

type FromProps = {
  token: string;
};

const ResetPasswordForm = ({ token }: FromProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState<CustomResponse>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (values: PasswordValues) => {
    try {
      const { response } = await resetPasswordRequest(token, values.newPassword);
      if (response.status === 200) {
        setResponse({
          status: 'success',
          title: 'Successful',
          message: 'Password has been reset',
        });

        setIsOpen(true);

        setTimeout(() => {
          handleCloseModal();
          router.push(Pages.SIGNIN);
        }, 4000);
      }
    } catch (error: any) {
      let message = 'An unknown error occurred.';

      switch (error.response.status) {
        case 400:
          message = ErrorMsg.EXPIRED_TOKEN;
          break;
        case 500:
          message = ErrorMsg.SERVER_ERROR;
        default:
          message = 'An unknown error occurred.';
      }

      setIsOpen(true);

      setResponse({
        status: 'error',
        title: 'Reset Password Failed',
        message,
      });

      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    }
  };

  const handleRedirect = () => {
    router.push(Pages.SIGNIN);
  };

  const validateForm = (values: PasswordValues) => {
    const errors: Partial<PasswordValues> = {};

    const { newPassword, confirmNewPassword } = values;

    if (!newPassword || !confirmNewPassword) {
      if (!newPassword) {
        errors.newPassword = 'A new password is required';
      }
      if (!confirmNewPassword) {
        errors.confirmNewPassword = 'Confirm password is required';
      }
    } else if (confirmNewPassword.trim() !== newPassword.trim()) {
      errors.confirmNewPassword = 'Passwords do not match';
    }

    return errors;
  };
  return (
    <>
      <div className="relative flex-col h-full justify-between">
        <div>
          <div className="my-4 space-y-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Reset password</p>
          </div>
          <Form
            validate={validateForm}
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
                  <Field
                    name="confirmNewPassword"
                    validate={composeValidators(required, minLength(8), validatePassword)}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="password"
                        placeholder="Confirm your new Password"
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
        <div className="absolute bottom-0 flex justify-between items-center w-full">
          <p className="text-sm select-none text-smokyBlue">Remembered your password?</p>

          <CButton text="Sign in" variant="outline" className="!w-1/3" onClick={handleRedirect} />
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

export default ResetPasswordForm;
