import { request } from '@/utils';

import { LoginPayload, LoginResponse } from './auth.types';

export const AuthService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return request<LoginResponse>('post', '/auth/login', payload);
  },
};
