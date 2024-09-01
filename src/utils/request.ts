import { IApiData } from '@/constants/types';

const request = async (
  url: string,
  config?: RequestInit,
): Promise<{ data: IApiData; response: Response }> => {
  const response = await fetch(url, config);

  if (response.status >= 400) {
    const data = await response.json();

    throw { data, response };
  }

  const data = await response.json();

  return { data, response };
};

export default request;
