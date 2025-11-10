import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

const BASE_URL = '/Tecnico';

export const TecnicoService = {
  list(): Promise<Tecnico[] | string> {
    return request<string | Tecnico[]>('get', `${BASE_URL}/Listar`);
  },

  getById(id: string): Promise<Tecnico | string> {
    return request<string | Tecnico>('get', `${BASE_URL}/Obter/${id}`);
  },
};
