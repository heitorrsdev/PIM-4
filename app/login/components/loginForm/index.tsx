import { useState } from 'react';
import { View } from 'react-native';

import { BaseForm } from '@/components/forms';
import { TextField } from '@/components/inputs';
import { useAuth } from '@/hooks';
import { showAlert } from '@/utils';
import { isValidEmail } from '@/utils/validation';

import styles from './styles';

interface LoginPayload {
  email: string;
  senha: string;
}

export default function LoginForm() {
  const { login } = useAuth();

  const [form, setForm] = useState<LoginPayload>({
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LoginPayload, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: keyof LoginPayload, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LoginPayload, string>> = {};

    if (!form.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!isValidEmail(form.email)) newErrors.email = 'Email inválido';

    if (!form.senha.trim()) newErrors.senha = 'Senha é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validate()) return;

    setIsLoading(true);
    try {
      await login({ email: form.email, senha: form.senha });
      showAlert('Sucesso', 'Login realizado com sucesso');
    } catch (error: unknown) {
      showAlert('Erro', 'Email ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <BaseForm onSubmit={handleSubmit} submitLabel={isLoading ? 'Entrando...' : 'Entrar'}>
        <TextField
          label="Email"
          value={form.email}
          onChangeText={value => handleChange('email', value)}
          placeholder="Digite seu email"
          error={errors.email}
        />
        <TextField
          label="Senha"
          value={form.senha}
          onChangeText={value => handleChange('senha', value)}
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.senha}
        />
      </BaseForm>
    </View>
  );
}
