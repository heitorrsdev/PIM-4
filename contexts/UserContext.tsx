import React, { createContext, useEffect, useState } from 'react';

import { useAuth } from '@/hooks';
import { AuthService, Usuario } from '@/services';
import { Email } from '@/services/auth';
import { UsuarioService } from '@/services/usuarios/usuario.service';
import { showAlert } from '@/utils';

interface UserContextProps {
  user: Usuario | null;
  loadingUser: boolean;
  refreshUser: () => Promise<void>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  loadingUser: true,
  refreshUser: async () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const { token, isAuthenticated } = useAuth();
  const [user, setUser] = useState<Usuario | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const fetchUser = async (): Promise<void> => {
    const response: Email | string = token ? await AuthService.getEmailByToken(token) : '';
    const email = typeof response === 'string' ? null : response.email;

    if (!isAuthenticated || !token || !email) {
      setUser(null);
      setLoadingUser(false);
      return;
    }

    try {
      const response: Usuario | string = await UsuarioService.getByEmail(email);
      if (typeof response === 'string') {
        throw new Error(response);
      }

      setUser(response);
    } catch {
      showAlert('Erro', 'Não foi possível carregar os dados do usuário.');
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token, isAuthenticated]);

  return (
    <UserContext.Provider value={{ user, loadingUser, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
