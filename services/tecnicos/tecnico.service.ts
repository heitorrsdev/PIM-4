import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

const BASE_URL = '/Tecnico';

export const TecnicoService = {
  getByEmail(email: string): Promise<Tecnico> {
    return request<Tecnico>('get', `${BASE_URL}/ObterPorEmail/${email}`);
  },
};
