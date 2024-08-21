'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import { Typography } from '@/assets';
import Pages from '@/constants/pages';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import CCheckbox from '@/components/CCheckbox';
import { composeValidators } from '@/utils/composeValidators';
import { required, minLength, validateEmail, validatePassword } from '@/utils/validators';

import SignInHandler from './signInHandler';
import CLoadingModal from '@/components/CLoadingModal';
import Link from 'next/link';

const SignInForm = () => {
  const routes = useRouter();
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirectToSignUp = () => {
    routes.push(Pages.SIGNUP);
  };

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRememberChecked(e.target.checked);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleForgotPassword = () => {};

  const { onSubmit, response } = SignInHandler(setIsOpen, isRememberChecked);

  return (
    <div className="flex flex-col bg-white h-full rounded-3xl px-8 py-7 shadow-md mobile:shadow-none mobile:px-0 mobile:py-3 mobile:rounded-none">
      <div className="flex justify-start items-start">
        <Typography />
      </div>
      <div className="flex justify-center mobile:items-start mobile:mt-8 short:items-center short:mt-0 desktop:mt-[25%] bigScreen:mt-[36%] h-full">
        <div className="flex flex-col w-full">
          <div className="my-4 space-y-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Sign In</p>
          </div>

          <Form
            onSubmit={onSubmit}
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
                        placeholder="Email"
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />

                  <Field
                    name="password"
                    validate={composeValidators(required, minLength(8), validatePassword)}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="password"
                        placeholder="Password"
                        hideCharacter
                        eyeIconPosition="right"
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />
                </div>

                <div className="w-full mt-2 space-y-3">
                  <div className="flex justify-between items-center mx-[1px]">
                    <CCheckbox
                      label={<p className="!text-smokyBlue">Remember me</p>}
                      checked={isRememberChecked}
                      onChange={handleRememberChange}
                      value="remember"
                      className="-ml-[6px]"
                    />

                    <Link
                      href={Pages.FORGOT}
                      onClick={handleForgotPassword}
                      className="border-none hover:bg-transparent text-darkGreen text-sm transition-all duration-300 hover:brightness-100"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <CButton
                    variant="confirm"
                    text="Sign in"
                    className="mt-4"
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
        <p className="text-sm select-none text-smokyBlue">Don&apos;t have an Account?</p>

        <CButton
          text="Sign up"
          variant="outline"
          className="!w-1/3"
          onClick={handleRedirectToSignUp}
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

export default SignInForm;
