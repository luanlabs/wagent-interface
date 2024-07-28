'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Field } from 'react-final-form';

import { Typography } from '@/assets';

import Pages from '@/constants/pages';
import { FormValues } from '@/constants/types';

import CInput from '@/components/CInput';
import CButton from '@/components/CButton';
import CCheckbox from '@/components/CCheckbox';

import { required, minLength, validateEmail, validatePassword } from '@/utils/validators';

const SignUpForm = () => {
  const [isRememberChecked, setIsRememberChecked] = useState(false);

  const routes = useRouter();

  const handleRedirectToSignIn = () => {
    routes.push(Pages.SIGNIN);
  };

  const handleRememberChange = () => {
    setIsRememberChecked(!isRememberChecked);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
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
      <div className="flex justify-center mobile:items-start mobile:mt-8 items-center h-full">
        <div className="flex flex-col w-full">
          <div className="my-4 space-y-4">
            <p className="text-2xl font-medium text-darkGreen select-none">Sign Up</p>
          </div>
          <Form
            onSubmit={onSubmit}
            validate={validateForm}
            render={({ handleSubmit, submitError, submitting, pristine }) => (
              <form onSubmit={handleSubmit} autoComplete="false">
                <div className="space-y-3 w-full">
                  <Field
                    name="store"
                    validate={composeValidators(required, minLength(8))}
                    render={({ input, meta }) => (
                      <CInput
                        border
                        autoFocus
                        placeholder="store name"
                        input={input}
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />

                  <Field
                    name="Email"
                    validate={composeValidators(required, validateEmail)}
                    render={({ input, meta }) => (
                      <CInput
                        border
                        placeholder="Email"
                        input={input}
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
                        border
                        type="password"
                        placeholder="Password"
                        input={input}
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
                        border
                        type="password"
                        placeholder="Confirm Password"
                        input={input}
                        meta={meta}
                        error={meta.touched && meta.error}
                        errorMsg={meta.error}
                      />
                    )}
                  />
                </div>
                <div className="w-full mt-2 space-y-3">
                  <Field
                    name="remember"
                    render={({ input, meta }) => (
                      <CCheckbox
                        label={<p className="!text-smokyBlue">Remember me</p>}
                        checked={isRememberChecked}
                        onChange={handleRememberChange}
                        value="remember"
                        className="mt-3 -ml-[6px]"
                        input={input}
                        meta={meta}
                      />
                    )}
                  />

                  {submitError && <div className="error">{submitError}</div>}
                  <CButton
                    variant="confirm"
                    text="Sign Up"
                    className="mt-4"
                    type="submit"
                    disabled={pristine || submitting}
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
    </div>
  );
};

export default SignUpForm;
