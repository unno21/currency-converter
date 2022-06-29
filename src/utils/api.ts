type API = (params: {
  baseUrl: string,
  endpoint: string,
  params?: {},
  headers?: {},
}) => Promise<any>;

export const api: API = ({ baseUrl, endpoint, params = {}, headers = {} }) => {
  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();

  return fetch(`${baseUrl}${endpoint}?${queryString}`, { headers });
};
