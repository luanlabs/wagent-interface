import { useState } from 'react';

import AuthService from '@/services/authService';
import { AuthCredentials, IApiError, IUserAuthResponseMessage } from '@/constants/types';

interface Response {
  status: 'success' | 'error' | '';
  title: string;
  message: string;
}

const ERROR_MESSAGES = {
  USER_ALREADY_EXIST: 'Your Email is already registered, Sign in instead.',
  REGISTRATION_FAILED: 'An error occurred during registration, try again.',
};

const SUCCESS_MESSAGE: Response = {
  status: 'success',
  title: 'Registration Successful',
  message: 'Please verify your Email address',
};

const SignUpHandler = (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [response, setResponse] = useState<Response>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (credentials: AuthCredentials): Promise<void> => {
    try {
      const data = await AuthService<IUserAuthResponseMessage>('auth', {
        email: credentials.email,
        storeName: credentials.storeName,
        password: credentials.password,
      });

      if (data.result?.message === 'Verification email was sent, please check your email.') {
        setResponse(SUCCESS_MESSAGE);
        setIsOpen(true);
        setTimeout(() => {
          handleCloseModal();
          // Reset form
          credentials.confirmPassword = '';
          credentials.email = '';
          credentials.password = '';
          credentials.storeName = '';
        }, 2000);
      }
    } catch (error) {
      const err = error as IApiError;
      let message = ERROR_MESSAGES.REGISTRATION_FAILED;

      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
      }, 2000);

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
