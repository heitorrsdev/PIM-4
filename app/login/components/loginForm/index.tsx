import { useState } from 'react';
import { View } from 'react-native';

import { BaseForm, FormField } from '@/components/forms';
import { useAuth } from '@/hooks';
import { isValidEmail } from '@/utils/validation';

import styles from './styles';

interface LoginErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const newErrors: LoginErrors = {};

    if (!email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!isValidEmail(email)) newErrors.email = 'Email inválido';

    if (!password.trim()) newErrors.password = 'Senha é obrigatória';

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    try {
      setLoading(true);
      await login({ email, senha: password });
      console.log('Login realizado com sucesso');
    } catch (error: any) {
      setErrors({ password: 'Email ou senha inválidos' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <BaseForm onSubmit={handleSubmit} submitLabel={loading ? 'Entrando...' : 'Entrar'}>
        <FormField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          error={errors.email}
        />
        <FormField
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.password}
        />
      </BaseForm>
    </View>
  );
}
