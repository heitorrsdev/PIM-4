export interface ChamadoPayload {
  Descricao: string,
  EmailDoUsuario: string,
  NomeDoUsuario: string,
  Prioridade: string,
  SetorDoUsuario: string,
  Titulo: string,
}

export interface Chamado extends ChamadoPayload {
  chamadoID: string
}
