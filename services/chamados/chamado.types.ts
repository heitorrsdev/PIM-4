export interface ChamadoPayload {
  descricao: string,
  emailDoUsuario: string,
  nomeDoUsuario: string,
  prioridade: string,
  setorDoUsuario: string,
  titulo: string,
}

export interface Chamado extends ChamadoPayload {
  chamadoID: string
}
