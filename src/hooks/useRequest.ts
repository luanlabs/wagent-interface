import { useEffect, useState } from 'react';
import request from '@/utils/request';
import { IApiData } from '../constants/types';

type LoadingState = {
  error: null;
  isLoading: true;
  data: null;
  response: null;
};

type ErrorState = {
  error: any;
  isLoading: false;
  data: null;
  response: null;
};

interface SuccessState {
  error: null;
  isLoading: false;
  data: IApiData;
  response: Response;
}

type State = LoadingState | ErrorState | SuccessState;

const useRequest = (url: string, config?: RequestInit) => {
  let uri = url;

  if (url.startsWith('/')) {
    uri = `${process.env.NEXT_PUBLIC_API}${url}`;
  }

  const [result, setResult] = useState<State>({
    error: null,
    isLoading: true,
    data: null,
    response: null,
  });
  useEffect(() => {
    request(uri, config)
      .then((res) => {
        setResult({
          error: null,
          isLoading: false,
          data: res.data,
          response: res.response,
        });
      })
      .catch((err) => {
        setResult({
          error: err,
          isLoading: false,
          data: null,
          response: null,
        });
      });
  }, [url]);

  return result;
};

export default useRequest;
