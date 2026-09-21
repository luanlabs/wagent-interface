import { IApiData } from '@/constants/types';

interface RequestConfig extends Omit<RequestInit, 'body'> {
  body?: Record<string, any> | string;
}

/** Parse a JSON response without throwing on empty/non-JSON bodies. */
const safeJson = async (response: Response): Promise<IApiData> => {
  try {
    return (await response.json()) as IApiData;
  } catch {
    return {} as IApiData;
  }
};

const request = async (
  url: string,
  config: RequestConfig = {},
): Promise<{ data: IApiData; response: Response }> => {
  const { headers, body, ...restConfig } = config;

  const params: RequestInit = {
    ...restConfig,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  const response = await fetch(url, params);
  const data = await safeJson(response);

  if (response.status >= 400) {
    throw { data, response };
  }

  return { data, response };
};

export default request;
