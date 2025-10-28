import api from '@/services/api';
import { request } from '@/utils';

import { LoginPayload, LoginResponse } from './auth.types';
import { getToken, removeToken, saveToken } from './storage';

export const AuthService = {
  async login(payload: LoginPayload) {
    const data = await request<LoginResponse>('post', '/auth/login', payload);
    const token = data.token;

    await saveToken(token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    return data;
  },

  async logout() {
    await removeToken();
    delete api.defaults.headers.Authorization;
  },

  async isAuthenticated() {
    return !!(await getToken());
  }
};
