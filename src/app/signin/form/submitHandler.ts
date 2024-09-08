import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Pages } from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { AuthCredentials, CustomResponse, ErrorMsg, IApiResponse } from '@/constants/types';

const SubmitHandler = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isRememberChecked: boolean,
) => {
  const [response, setResponse] = useState<CustomResponse>({
    status: '',
    title: '',
    message: '',
  });
  const router = useRouter();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAuthSuccess = (token: string) => {
    setResponse({
      status: 'success',
      title: 'Login successful',
      message: 'Your login was successful, now we will redirect you to dashboard.',
    });

    if (isRememberChecked) {
      Cookies.set('token', token, { expires: 365 });
    } else {
      Cookies.set('token', token);
    }

    setIsOpen(true);
    setTimeout(() => {
      handleCloseModal();
      router.push(Pages.DASHBOARD);
    }, 3000);
  };

  const handleAuthError = (data: IApiResponse) => {
    let title = 'Login Failed';
    let message = ErrorMsg.AUTH_FAILED;

    switch (data.response.status) {
      case 400:
        title = 'Validation failed';
        message = ErrorMsg.INVALID_CREDENTIALS;
        break;
      case 401:
        message = ErrorMsg.EMAIL_NOT_VERIFIED;
        break;
      case 404:
        message = ErrorMsg.USER_NOT_FOUND;
        break;
      case 500:
        message = ErrorMsg.SERVER_ERROR;
        break;
      default:
        message = ErrorMsg.AUTH_FAILED;
    }

    setResponse({
      status: 'error',
      title,
      message,
    });
  };

  const onSubmit = async (credentials: AuthCredentials): Promise<void> => {
    try {
      const { data, response } = await authRequest('auth/login', credentials);

      if (data.result && response.status === 200) {
        handleAuthSuccess((data.result as { token: string }).token);
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

export default SubmitHandler;
