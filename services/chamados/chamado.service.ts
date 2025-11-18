import { request } from '@/utils';

import { Chamado, ChamadoPayload, ChamadoPrioridade, ChamadoStatus } from './chamado.types';

const BASE_URL = '/Chamado';

export const ChamadoService = {
  add(payload: ChamadoPayload): Promise<string> {
    return request<string>('post', `${BASE_URL}/Adicionar`, payload);
  },

  list(): Promise<Chamado[]> {
    return request<Chamado[]>('get', `${BASE_URL}/ListarChamados`);
  },

  getByEmail(email: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', `${BASE_URL}/ObterChamadoPorEmail/${email}`);
  },

  edit(id: string, payload: ChamadoPayload): Promise<string> {
    return request<string>('put', `${BASE_URL}/Editar/${id}`, payload);
  },

  responder(id: string, chamado: Chamado, respostaTecnico: string): Promise<string> {
    const payload: ChamadoPayload = {
      descricao: chamado.descricao,
      emailDoUsuario: chamado.emailDoUsuario,
      nomeDoUsuario: chamado.nomeDoUsuario,
      prioridade: chamado.prioridade as ChamadoPrioridade,
      setorDoUsuario: chamado.setorDoUsuario,
      status: ChamadoStatus.Fechado,
      titulo: chamado.titulo,
    };
    
    return request('put', `${BASE_URL}/Editar/${id}`, {
      ...payload,
      respostaTecnico,
    });
  },

  remove(id: string): Promise<string> {
    return request<string>('delete', `${BASE_URL}/Deletar/${id}`);
  },
};
