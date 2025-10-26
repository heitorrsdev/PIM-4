import { TecnicoResponse } from './tecnico.types';
import { request } from '@/utils';

export const TecnicoService = {
  list: () => request<TecnicoResponse[]>('get', '/tecnico/Listar'),
};
