import { request } from '@/utils';

import { TecnicoType } from './tecnico.types';

export const TecnicoService = {
  list: () => request<string | TecnicoType[]>('get', '/tecnico/Listar'),
};
