import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Pages from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { AuthCredentials, IApiError, IUserLoginResponseMessage } from '@/constants/types';

interface ResponseMessage {
  status: 'success' | 'error' | '';
  title: string;
  message: string;
}

const ERROR_MESSAGES = {
  USER_NOT_EXIST: 'User with this Email not found, Sign up instead.',
  INVALID_CREDENTIALS: 'Email or password does not match with your information in our database.',
  AUTH_FAILED: 'An error occurred during authentication, try again.',
};

const SUCCESS_MESSAGE: ResponseMessage = {
  status: 'success',
  title: 'Login successful',
  message: 'Your login was successful, now we will redirect you to the dashboard.',
};

const SignInHandler = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isRememberChecked: boolean,
) => {
  const router = useRouter();
  const [response, setResponse] = useState<ResponseMessage>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAuthSuccess = (token: string) => {
    setResponse(SUCCESS_MESSAGE);
    if (isRememberChecked) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
    setIsOpen(true);
    setTimeout(() => {
      handleCloseModal();
      router.push(Pages.DASHBOARD);
    }, 2000);
  };

  const handleAuthError = (error: IApiError) => {
    let message = ERROR_MESSAGES.AUTH_FAILED;

    if (error.data.message === 'User not exist') {
      message = ERROR_MESSAGES.USER_NOT_EXIST;
    } else if (error.data.message === 'Invalid credentials') {
      message = ERROR_MESSAGES.INVALID_CREDENTIALS;
    }

    setResponse({
      status: 'error',
      title: 'Login Failed',
      message,
    });
  };

  const onSubmit = async (credentials: AuthCredentials): Promise<void> => {
    try {
      const data: IUserLoginResponseMessage = await authRequest<IUserLoginResponseMessage>(
        'auth/login',
        credentials,
      );

      if (data.result?.token) {
        handleAuthSuccess(data.result.token);
      }
    } catch (error) {
      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
      }, 2000);

      handleAuthError(error as IApiError);
    }
  };

  return { onSubmit, response };
};

export default SignInHandler;
