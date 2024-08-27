const request = async <T>(
  url: string,
  config?: RequestInit,
): Promise<{ data: T; response: Response }> => {
  try {
    const response = await fetch(url, config);

    if (response.status >= 400) {
      const data = await response.json();

      throw { data, response };
    }

    const data = await response.json();

    return { data, response };
  } catch (error) {
    throw error;
  }
};

export default request;
