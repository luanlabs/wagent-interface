import { IApiData } from '@/constants/types';

interface RequestConfig extends Omit<RequestInit, 'body'> {
  body?: Record<string, any> | string;
}

const request = async (
  url: string,
  config: RequestConfig = {},
): Promise<{ data: IApiData; response: Response }> => {
  const { headers, body, ...restConfig } = config;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const params: RequestInit = {
    ...restConfig,
    headers: defaultHeaders,
  };

  if (body) {
    params.body = JSON.stringify(body);
  }
  const response = await fetch(url, params);

  if (response.status >= 400) {
    const data = await response.json();
    throw { data, response };
  }

  const data = await response.json();
  return { data, response };
};

export default request;
