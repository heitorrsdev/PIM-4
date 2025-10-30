import { request } from '@/utils';

import { Tecnico } from './tecnico.types';

export const TecnicoService = {
  list: () => request<string | Tecnico[]>('get', '/tecnico/Listar'),
};
