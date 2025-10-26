import { request } from '@/utils';

import { LoginPayload, LoginResponse } from './auth.types';

export const AuthService = {
  login: (payload: LoginPayload) => {
    return request<LoginResponse>('post', '/auth/login', payload);
  },
};
