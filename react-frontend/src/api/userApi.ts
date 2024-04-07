import api from './api';

const URLS = {
  apiProxyUrl: 'http://bdelgado.duckdns.org:6002/api/user'
};

export type userData = {
  message: string;
  status: 'success' | 'error';
};

export const fetchUser = () => {
  return api.get<userData>(URLS.apiProxyUrl);
};

export default { fetchUser };
