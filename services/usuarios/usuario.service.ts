import { createCRUD } from '@/utils/crudFactory';

import { UsuarioPayload, UsuarioResponse } from './usuario.types';

export const UsuarioService = createCRUD<UsuarioPayload, UsuarioResponse>('/Usuario');
