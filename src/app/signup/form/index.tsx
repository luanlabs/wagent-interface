'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import { Pages } from '@/constants/pages';
import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import { composeValidators } from '@/utils/composeValidators';
import { AuthCredentials } from '@/constants/types';
import { required, minLength, validateEmail } from '@/utils/validators';

import submitHandler from './submitHandler';

import CLoadingModal from '@/components/CLoadingModal';

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = useRouter();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { onSubmit, response } = submitHandler(setIsOpen);

  const handleRedirect = () => {
    routes.push(Pages.SIGNIN);
  };

  const validateForm = (values: AuthCredentials) => {
    const errors: Partial<AuthCredentials> = {};

    const { password, confirmPassword } = values;

    if (!password || !confirmPassword) {
      if (!password) {
        errors.password = 'Password is required';
      }
      if (!confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
      }
    } else if (confirmPassword.trim() !== password.trim()) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };
  return (
    <>
      <div className="relative flex-col h-full justify-between">
        <div>
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
                    name="name"
                    validate={composeValidators(required, minLength(4))}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        autoComplete="name"
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
                    validate={composeValidators(required, minLength(8))}
                    render={({ input, meta }) => (
                      <CInput
                        {...input}
                        border
                        type="password"
                        placeholder="Password"
                        meta={meta}
                        hideCharacter
                        eyeIconPosition="right"
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
                        hideCharacter
                        eyeIconPosition="right"
                        type="password"
                        placeholder="Confirm Password"
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
                    text="Sign Up"
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
          <p className="text-sm select-none text-smokyBlue">Already have an Account?</p>

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
        checkEmail={response.status === 'success'}
      />
    </>
  );
};

export default SignUpForm;
