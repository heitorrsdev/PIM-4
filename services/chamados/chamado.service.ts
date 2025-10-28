import { request } from '@/utils';

import { ChamadoPayload, ChamadoResponse } from './chamado.types';

export const addChamado = async (payload: ChamadoPayload): Promise<ChamadoResponse> => {
  return request<ChamadoResponse>('post', '/chamados/Adicionar', payload);
};

export const listChamados = async (): Promise<ChamadoResponse[]> => {
  return request<ChamadoResponse[]>('get', '/chamados/Listar');
};
