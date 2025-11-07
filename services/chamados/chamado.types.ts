export enum ChamadoStatus {
  Aberto = 'Aberto',
  Fechado = 'Fechado',
  Pendente = 'Pendente',
}

export enum ChamadoPrioridade {
  Baixa = 'Baixa',
  Média = 'Média',
  Alta = 'Alta',
}

export interface ChamadoPayload {
  descricao: string,
  emailDoUsuario: string,
  nomeDoUsuario: string,
  prioridade: ChamadoPrioridade,
  setorDoUsuario: string,
  status: ChamadoStatus,
  título: string,
}

export interface Chamado extends ChamadoPayload {
  chamadoID: string
}
