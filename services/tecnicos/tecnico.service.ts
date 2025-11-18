import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

const BASE_URL = '/Tecnico';

export const TecnicoService = {
  getByEmail(email: string): Promise<Tecnico | string> {
    return request<Tecnico | string>('get', `${BASE_URL}/ObterPorEmail/${email}`);
  },
};
