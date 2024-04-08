import api from './api';
import { User } from '@/types';

const URLS = {
  apiProxyUrl: 'http://bdelgado.duckdns.org:6002/api/user'
};

export const fetchUser = async (token: string) => {
  try {
    const response = await api.get<User[]>(URLS.apiProxyUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { fetchUser };
