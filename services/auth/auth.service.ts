import { LoginPayload, LoginResponse } from './auth.types';
import { request } from '@/utils';

export const AuthService = {
  login: (payload: LoginPayload) => {
    return request<LoginResponse>('post', '/auth/login', payload);
  },
};
