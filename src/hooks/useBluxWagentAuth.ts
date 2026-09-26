import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBlux } from '@bluxcc/react';

import { Pages } from '@/constants/pages';
import authRequest from '@/services/authRequest';
import { readBluxSessionToken } from '@/utils/bluxAuth';
import { MODAL_CLOSE_DURATION_MS } from '@/constants/values';
import { CustomResponse, ErrorMsg, HttpStatusCode } from '@/constants/types';

type UseBluxWagentAuthOptions = {
  remember?: boolean;
};

const persistToken = (token: string, remember: boolean) => {
  const cookieOptions = {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
  };

  if (remember) {
    Cookies.set('token', token, { ...cookieOptions, expires: 365 });
    return;
  }

  Cookies.set('token', token, cookieOptions);
};

const messageFrom = (error: unknown) => {
  if (typeof error === 'string' && error.trim()) {
    return error.replace(/^BLUX:\s*/, '');
  }

  if (error instanceof Error && error.message) {
    return error.message.replace(/^BLUX:\s*/, '');
  }

  const data = (error as { data?: { error?: { message?: string } } } | undefined)?.data;
  if (data?.error?.message) {
    return data.error.message;
  }

  return ErrorMsg.AUTH_FAILED;
};

const useBluxWagentAuth = ({ remember = true }: UseBluxWagentAuthOptions = {}) => {
  const { login, isReady, isAuthenticated, user } = useBlux();
  const router = useRouter();
  const [isBusy, setIsBusy] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState<CustomResponse>({
    status: '',
    title: '',
    message: '',
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const fail = useCallback((message: string) => {
    setResponse({ status: 'error', title: 'Login failed', message });
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), MODAL_CLOSE_DURATION_MS);
  }, []);

  const authenticate = useCallback(async () => {
    if (!isReady || isBusy) {
      return;
    }

    setIsBusy(true);

    try {
      if (!(isAuthenticated && user?.address)) {
        await login();
      }

      const bluxToken = readBluxSessionToken();
      if (!bluxToken) {
        fail('Blux did not return a session. Try signing in again.');
        return;
      }

      const { data, response: apiResponse } = await authRequest(bluxToken);
      const token = (data.result as { token?: string } | undefined)?.token;

      if (!token || apiResponse.status !== HttpStatusCode.OK) {
        fail(ErrorMsg.AUTH_FAILED);
        return;
      }

      persistToken(token, remember);
      setResponse({
        status: 'success',
        title: 'Login successful',
        message: 'You are in. Redirecting to your dashboard.',
      });
      setIsOpen(true);
      setTimeout(() => {
        handleCloseModal();
        router.push(Pages.DASHBOARD);
      }, MODAL_CLOSE_DURATION_MS);
    } catch (error: unknown) {
      const status = (error as { response?: { status?: number } } | undefined)?.response?.status;
      let message = error instanceof TypeError ? 'Could not reach Wagent. Please try again.' : messageFrom(error);

      if (status === HttpStatusCode.BadRequest) {
        message = ErrorMsg.INVALID_CREDENTIALS;
      } else if (
        status === HttpStatusCode.BadGateway ||
        status === HttpStatusCode.ServiceUnavailable
      ) {
        message = ErrorMsg.BLUX_UNAVAILABLE;
      } else if (status === HttpStatusCode.InternalServerError) {
        message = ErrorMsg.SERVER_ERROR;
      } else if (!message || message === ErrorMsg.AUTH_FAILED) {
        message = status === HttpStatusCode.Unauthorized ? ErrorMsg.WALLET_NOT_VERIFIED : message;
      }

      fail(message);
    } finally {
      setIsBusy(false);
    }
  }, [fail, isAuthenticated, isBusy, isReady, login, remember, router, user]);

  return {
    authenticate,
    isReady,
    isBusy,
    isOpen,
    response,
    handleCloseModal,
  };
};

export default useBluxWagentAuth;
