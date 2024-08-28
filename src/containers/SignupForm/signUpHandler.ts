import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Pages from '@/constants/pages';
import authRequest from '@/services/authRequest';
import {
  AuthCredentials,
  customResponse,
  IApiError,
  IUserAuthResponseMessage,
} from '@/constants/types';

const ERROR_MESSAGES = {
  USER_ALREADY_EXIST: 'Your Email is already registered, Sign in instead.',
  REGISTRATION_FAILED: 'An error occurred during registration, try again.',
};

const SUCCESS_MESSAGE: customResponse = {
  status: 'success',
  title: 'Registration Successful',
  message: 'Please verify your Email address',
};

const SignUpHandler = (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [response, setResponse] = useState<customResponse>({
    status: '',
    title: '',
    message: '',
  });
  const router = useRouter();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (credentials: AuthCredentials): Promise<void> => {
    try {
      const data = await authRequest<IUserAuthResponseMessage>('auth', {
        email: credentials.email,
        storeName: credentials.storeName,
        password: credentials.password,
      });

      if (data.result?.message === 'Verification email was sent, please check your email.') {
        setResponse(SUCCESS_MESSAGE);
        setIsOpen(true);
        setTimeout(() => {
          handleCloseModal();
          router.push(Pages.SIGNIN);
        }, 3000);
      }
    } catch (error) {
      const err = error as IApiError;
      let message = ERROR_MESSAGES.REGISTRATION_FAILED;

      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
      }, 3000);

      if (err.data.message === 'User Already Exist!') {
        message = ERROR_MESSAGES.USER_ALREADY_EXIST;
      }

      setResponse({
        status: 'error',
        title: 'Registration Failed',
        message,
      });
    }
  };

  return { onSubmit, response };
};

export default SignUpHandler;
