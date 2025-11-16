import { request } from '@/utils';

import { LoginPayload, LoginResponse } from './auth.types';

const BASE_URL = '/Auth';

export const AuthService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return request<LoginResponse>('post', `${BASE_URL}/LoginWeb`, payload);
  },
};
