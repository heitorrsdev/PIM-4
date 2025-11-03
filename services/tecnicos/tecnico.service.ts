import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

const BASE_URL = '/tecnico';

export const TecnicoService = {
  list(): Promise<Tecnico[] | string> {
    return request<string | Tecnico[]>('get', `${BASE_URL}/Listar`);
  },
};
