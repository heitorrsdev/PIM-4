import { request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

export const addChamado = async (payload: ChamadoPayload): Promise<Chamado> => {
  return request<Chamado>('post', '/chamados/Adicionar', payload);
};

export const listChamados = async (): Promise<Chamado[]> => {
  return request<Chamado[]>('get', '/chamados/Listar');
};
