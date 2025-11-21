import React, { createContext, useEffect, useState } from 'react';

import { useAuth } from '@/hooks';
import { AuthService, Tecnico, TecnicoService, Usuario } from '@/services';
import { Email } from '@/services/auth';
import { UsuarioService } from '@/services/usuarios/usuario.service';
import { showAlert } from '@/utils';

interface UserContextProps {
  user: Usuario | Tecnico | null;
  loadingUser: boolean;
  refreshUser: () => Promise<void>;
  userType?: 'Usuario' | 'Tecnico' | null;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  loadingUser: true,
  refreshUser: async () => {},
  userType: null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<Usuario |  Tecnico | null>(null);
  const [userType, setUserType] = useState<'Usuario' | 'Tecnico' | null>(null);
  const { token } = useAuth();

  const fetchUser = async (): Promise<void> => {
    const response: Email | string = token ? await AuthService.getEmailByToken(token) : '';
    const email = typeof response === 'string' ? null : response.email;

    if (!token || !email) {
      setUser(null);
      return;
    }

    try {
      const userResponse: Usuario = await UsuarioService.getByEmail(email);
      let tecnicoResponse: Tecnico | null = null;

      if (!userResponse) {
        tecnicoResponse = await TecnicoService.getByEmail(email);
      }

      setUserType(!!tecnicoResponse ? 'Tecnico' : 'Usuario');
      setUser(userResponse || tecnicoResponse || null);
    } catch {
      showAlert('Erro', 'Não foi possível carregar os dados do usuário.');
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, userType, loadingUser, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
