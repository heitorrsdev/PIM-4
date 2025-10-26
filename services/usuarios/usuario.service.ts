import { UsuarioPayload, UsuarioResponse } from './usuario.types';
import { createCRUD } from '@/utils/crudFactory';

export const UsuarioService = createCRUD<UsuarioPayload, UsuarioResponse>('/Usuario');
