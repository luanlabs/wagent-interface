'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Form, Field, useForm } from 'react-final-form';

import { Typography } from '@/assets';
import Pages from '@/constants/pages';
import CInput from '@/components/CInput';
import CModal from '@/components/CModal';
import CButton from '@/components/CButton';
import { FormValues, IApiError } from '@/constants/types';
import { required, minLength, validateEmail, validatePassword } from '@/utils/validators';

import FetchAuth from './fetchAuth';

import mailbox from 'public/images/mailbox.png';

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resMessage, setResMessage] = useState({
    status: '',
    title: '',
    message: '',
  });
  const routes = useRouter();
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleRedirectToSignIn = () => {
    routes.push(Pages.SIGNIN);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const data = await FetchAuth({
        email: values.email,
        storeName: values.storeName,
        password: values.password,
      });
      if (data.result?.message === 'Verification email was sent, please check your email.') {
        setResMessage({
          status: 'success',
          title: 'Registration Successful',
          message: 'Please verify your Email address',
        });
        setIsOpen(true);
        setTimeout(() => {
          handleCloseModal();
          values.confirmPassword = '';
          values.email = '';
          values.password = '';
          values.storeName = '';
        }, 2000);
      }
    } catch (error: IApiError | any) {
      if (error.data.message === 'User Already Exist!') {
        setResMessage({
          status: 'error',
          title: 'Registration Failed',
          message: 'Your Email is already registered, Sign in instead.',
        });
      } else {
        setResMessage({
          status: 'error',
          title: 'Registration Failed',
          message: 'An error occurred during authentication, try again.',
        });
        error = error.data.message;
      }
    }

    return {};
  };

  const composeValidators =
    (...validators: any[]) =>
    (value: string) =>
      validators.reduce((error, validator) => error || validator(value), undefined);

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.confirmPassword != values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="flex flex-col bg-white h-full rounded-3xl px-8 py-7 shadow-md mobile:shadow-none mobile:px-0 mobile:py-3 mobile:rounded-none">
      <div className="flex justify-start items-start">
        <Typography />
      </div>
      <div className="flex justify-center mobile:items-start mobile:mt-8 short:items-center short:mt-0 desktop:mt-[25%] bigScreen:mt-[36%] h-full">
        <div className="flex flex-col w-full">
          <div className="my-4 space-y-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Sign Up</p>
          </div>
          <Form
            validate={validateForm}
            onSubmit={onSubmit}
            keepDirtyOnReinitialize
            render={({ handleSubmit, submitError, submitting, pristine, invalid }) => (
              <form onSubmit={handleSubmit} autoComplete="false">
                <div className="space-y-3 w-full">
                  <Field
                    name="storeName"
                    validate={composeValidators(required, minLength(4))}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="text"
                        placeholder="Store Name"
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />

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
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />

                  <Field
                    name="confirmPassword"
                    validate={composeValidators(required, minLength(8))}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="password"
                        placeholder="Confirm Password"
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />
                </div>
                {resMessage.status === 'error' && (
                  <div className="text-error text-sm my-1">{resMessage.message}</div>
                )}
                <div className="w-full">
                  <CButton
                    variant="confirm"
                    text="Sign Up"
                    className="mt-2"
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
        <p className="text-sm select-none text-smokyBlue">Already have an Account?</p>

        <CButton
          text="Sign in"
          variant="outline"
          className="!w-1/3"
          onClick={handleRedirectToSignIn}
        />
      </div>
      <CModal isOpen={isOpen} onClose={handleCloseModal} width="310" className="w-[310px] py-2">
        <div className="w-full flex flex-col justify-center items-center">
          <Image src={mailbox} alt="email Icon" width={54} height={54} />
        </div>
        <div className={`text-center space-y-2`}>
          <p className="text-lg text-darkGreen ">{resMessage.title}</p>
          <p className="text-sm text-[#667085]">{resMessage.message}</p>
        </div>
      </CModal>
    </div>
  );
};

export default SignUpForm;
