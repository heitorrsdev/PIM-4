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
  titulo: string,
  resposta?: string | null,
  tecnicoResponsavel?: string | null,
}

export interface Chamado extends ChamadoPayload {
  chamadoID: string,
  resposta?: string,
  tecnicoResponsavel?: string | null,
}

export interface RespostaChamadoPayload {
  resposta: string,
  status: ChamadoStatus,
}
