import { buildUrl, request } from '@/utils';

import { Email, LoginPayload, LoginResponse } from './auth.types';

const BASE_URL = '/Auth';

export const AuthService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return request<LoginResponse>('post', buildUrl(BASE_URL, '/LoginWeb'), payload);
  },

  async getEmailByToken(token: string): Promise<Email | string> {
    return request<Email | string>('post', buildUrl(BASE_URL, '/ObterEmail'), { token });
  }
};
