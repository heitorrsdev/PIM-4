import { Tecnico } from '../tecnicos/tecnico.types';
import { Usuario } from '../usuarios/usuario.types';

export interface ChamadoPayload {
  titulo: string;
  descricao: string;
  tecnicoId: string;
  usuarioId: string;
}

export interface Chamado {
  id: string;
  titulo: string;
  descricao: string;
  tecnicoId: string;
  tecnico: Tecnico;
  usuarioId: string;
  usuario: Usuario;
}
