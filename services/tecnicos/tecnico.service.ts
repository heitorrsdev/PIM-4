import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

export const TecnicoService = {
  list(): Promise<Tecnico[] | string> {
    return request<string | Tecnico[]>('get', '/tecnico/Listar');
  },
};
