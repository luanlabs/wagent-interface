import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Pages } from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { MODAL_CLOSE_DURATION_MS } from '@/constants/values';
import {
  AuthCredentials,
  CustomResponse,
  ErrorMsg,
  HttpStatusCode,
  IApiResponse,
} from '@/constants/types';

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
    }, MODAL_CLOSE_DURATION_MS);
  };

  const handleAuthError = (data: IApiResponse) => {
    let title = 'Login Failed';
    let message = ErrorMsg.AUTH_FAILED;

    switch (data.response.status) {
      case HttpStatusCode.BadRequest:
        title = 'Validation failed';
        message = ErrorMsg.INVALID_CREDENTIALS;
        break;
      case HttpStatusCode.Unauthorized:
        message = ErrorMsg.EMAIL_NOT_VERIFIED;
        break;
      case HttpStatusCode.NotFound:
        message = ErrorMsg.USER_NOT_FOUND;
        break;
      case HttpStatusCode.InternalServerError:
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

      if (data.result && response.status === HttpStatusCode.OK) {
        handleAuthSuccess((data.result as { token: string }).token);
      }
    } catch (error: any) {
      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
        if (error.response.status === HttpStatusCode.Unauthorized) {
          router.push(Pages.VERIFY);
        }
      }, MODAL_CLOSE_DURATION_MS);

      handleAuthError(error);
    }
  };

  return { onSubmit, response };
};

export default SubmitHandler;
