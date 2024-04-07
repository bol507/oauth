import api from './api';

const URLS = {
  fetchUserUrl: 'getUser'
};

export type userData = {
  message: string;
  status: 'success' | 'error';
};

export const fetchUser = () => {
  return api.get<userData>(URLS.fetchUserUrl, {
    baseURL: 'http://bdelgado.duckdns.org::6002/api/user'
  });
};
