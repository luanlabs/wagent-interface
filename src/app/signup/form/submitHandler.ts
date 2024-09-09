import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Pages } from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { AuthCredentials, CustomResponse, ErrorMsg } from '@/constants/types';

const SignUpHandler = (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [response, setResponse] = useState<CustomResponse>({
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
      const { response } = await authRequest('auth', {
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
      });

      if (response.status === 201) {
        setResponse({
          status: 'success',
          title: 'Registration Successful',
          message: 'Please verify your Email address',
        });

        setIsOpen(true);
        setTimeout(() => {
          handleCloseModal();
          router.push(Pages.SIGNIN);
        }, 4000);
      }
    } catch (error: any) {
      let message = ErrorMsg.REGISTRATION_FAILED;

      switch (error.response.status) {
        case 400:
          message = ErrorMsg.INVALID_CREDENTIALS;
          break;
        case 401:
          message = ErrorMsg.USER_ALREADY_EXISTS;
          break;
        case 500:
          message = ErrorMsg.SERVER_ERROR;
        default:
          message = ErrorMsg.REGISTRATION_FAILED;
      }

      setIsOpen(true);

      setResponse({
        status: 'error',
        title: 'Registration Failed',
        message,
      });

      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    }
  };

  return { onSubmit, response };
};

export default SignUpHandler;
