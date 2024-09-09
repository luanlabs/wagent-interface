'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import CInput from '@/components/CInput';
import { Pages } from '@/constants/pages';
import CButton from '@/components/CButton';
import { composeValidators } from '@/utils/composeValidators';
import { required, validateEmail } from '@/utils/validators';
import CLoadingModal from '@/components/CLoadingModal';
import { CustomResponse, ErrorMsg } from '@/constants/types';
import verifyEmailRequest from '@/services/verifyEmailRequest';

const VerifyForm = () => {
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

  const onSubmit = async (email: string) => {
    try {
      const { response } = await verifyEmailRequest(email);
      if (response.status === 201) {
        setResponse({
          status: 'success',
          title: 'Verification Successful',
          message: 'Verification email is sent',
        });

        setIsOpen(true);

        setTimeout(() => {
          handleCloseModal();
          router.push(Pages.SIGNIN);
        }, 4000);
      }
    } catch (error: any) {
      let message = ErrorMsg.VERIFICATION_FAILED;

      switch (error.response.status) {
        case 400:
          message = ErrorMsg.INVALID_EMAIL;
          break;
        case 401:
          message = ErrorMsg.ALREADY_VERIFIED;
          break;
        case 404:
          message = ErrorMsg.EMAIL_NOT_FOUND;
          break;
        case 429:
          message = ErrorMsg.TOO_MANY_REQUESTS;
          break;
        case 500:
          message = ErrorMsg.SERVER_ERROR;
        default:
          message = ErrorMsg.VERIFICATION_FAILED;
      }

      setIsOpen(true);

      setResponse({
        status: 'error',
        title: 'Verification Failed',
        message,
      });

      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    }
  };

  const handleRedirect = () => {
    router.push(Pages.SIGNUP);
  };

  return (
    <>
      <div className="relative flex-col h-full justify-between">
        <div>
          <div className="my-4 space-y-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Verify email</p>
          </div>
          <Form
            onSubmit={onSubmit}
            keepDirtyOnReinitialize
            render={({ handleSubmit, submitError, submitting, pristine, invalid }) => (
              <form onSubmit={handleSubmit} autoComplete="false">
                <div className="space-y-3 w-full">
                  <Field
                    name="email"
                    validate={composeValidators(required, validateEmail)}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="email"
                        placeholder="Enter your email"
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />
                </div>

                <div className="w-full">
                  <CButton
                    variant="confirm"
                    text="Confirm"
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
          <p className="text-sm select-none text-smokyBlue">Don&apos;t have an Account?</p>

          <CButton text="Sign up" variant="outline" className="!w-1/3" onClick={handleRedirect} />
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

export default VerifyForm;
