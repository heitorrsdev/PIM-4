import { request } from '@/utils';

import { TecnicoResponse } from './tecnico.types';

export const TecnicoService = {
  list: () => request<TecnicoResponse[]>('get', '/tecnico/Listar'),
};
