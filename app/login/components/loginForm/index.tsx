import { BaseForm, FormField } from '@/components/form';
import { isValidEmail } from '@/utils/validation';
import { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!isValidEmail(email)) newErrors.email = 'Email inválido';
    if (!password.trim()) newErrors.password = 'Senha é obrigatória';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // adicionar lógica de enviar dados posteriormente
      console.log('Form enviado', { email, password });
    }
  };

  return (
    <View style={styles.container}>
      <BaseForm onSubmit={handleSubmit} submitLabel="Registrar">
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
