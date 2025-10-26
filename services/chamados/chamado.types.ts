import { TecnicoResponse } from '../tecnicos/tecnico.types';
import { UsuarioResponse } from '../usuarios/usuario.types';

export interface ChamadoPayload {
  titulo: string;
  descricao: string;
  tecnicoId: string;
  usuarioId: string;
}

export interface ChamadoResponse {
  id: string;
  titulo: string;
  descricao: string;
  tecnicoId: string;
  tecnico: TecnicoResponse;
  usuarioId: string;
  usuario: UsuarioResponse;
}
