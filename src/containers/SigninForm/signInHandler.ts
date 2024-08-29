import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Pages from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { AuthCredentials, CustomResponse, IApiResponse } from '@/constants/types';

const ERROR_MESSAGES = {
  USER_NOT_EXIST: 'User not found, Sign up instead.',
  INVALID_CREDENTIALS: 'Email or password does not match with your information in our database.',
  AUTH_FAILED: 'An error occurred during authentication, try again.',
};

const SUCCESS_MESSAGE: CustomResponse = {
  status: 'success',
  title: 'Login successful',
  message: 'Your login was successful, now we will redirect you to the dashboard.',
};

const SignInHandler = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isRememberChecked: boolean,
) => {
  const router = useRouter();
  const [response, setResponse] = useState<CustomResponse>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAuthSuccess = (token: string) => {
    setResponse(SUCCESS_MESSAGE);
    document.cookie = `token=${token}`;

    setIsOpen(true);
    setTimeout(() => {
      handleCloseModal();
      router.push(Pages.DASHBOARD);
    }, 3000);
  };

  const handleAuthError = (data: IApiResponse) => {
    let message = ERROR_MESSAGES.AUTH_FAILED;

    if (data.response.status === 401) {
      message = ERROR_MESSAGES.USER_NOT_EXIST;
    } else if (data.response.status === 400) {
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
      const { data, response } = await authRequest('auth/login', credentials);

      if (data.result && response.status === 200) {
        handleAuthSuccess(data.result.token);
      }
    } catch (error: any) {
      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
      }, 3000);

      handleAuthError(error);
    }
  };

  return { onSubmit, response };
};

export default SignInHandler;
