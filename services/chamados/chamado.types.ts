export enum ChamadoStatus {
  Aberto = 'Aberto',
  Fechado = 'Fechado',
  Pendente = 'Pendente',
}

export interface ChamadoPayload {
  descricao: string,
  emailDoUsuario: string,
  nomeDoUsuario: string,
  prioridade: string,
  setorDoUsuario: string,
  status: ChamadoStatus,
  título: string,
}

export interface Chamado extends ChamadoPayload {
  chamadoID: string
}
