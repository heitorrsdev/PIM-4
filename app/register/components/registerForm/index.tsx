import { useState } from 'react';
import { View } from 'react-native';

import { BaseForm } from '@/components/forms';
import { FormField } from '@/components/inputs';
import { UsuarioService } from '@/services';
import { UsuarioPayload } from '@/services/usuarios/usuario.types';
import { showAlert } from '@/utils';
import { isValidEmail } from '@/utils/validation';

import styles from './styles';

export default function RegisterForm() {
  const [form, setForm] = useState<UsuarioPayload>({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    setor: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UsuarioPayload, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: keyof UsuarioPayload, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof UsuarioPayload, string>> = {};

    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!form.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!isValidEmail(form.email)) newErrors.email = 'Email inválido';
    if (!form.senha.trim()) newErrors.senha = 'Senha é obrigatória';
    if (!form.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!form.setor.trim()) newErrors.setor = 'Setor é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await UsuarioService.add(form);
      showAlert('Sucesso', response);
      console.log('Usuário registrado com sucesso:', response);
    } catch (error: unknown) {
      console.error('Erro ao registrar usuário:', error);
      showAlert('Erro', 'Não foi possível registrar o usuário.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <BaseForm onSubmit={handleSubmit} submitLabel={isLoading ? 'Enviando...' : 'Registrar'}>
        <FormField
          label="Nome"
          value={form.nome}
          onChangeText={value => handleChange('nome', value)}
          placeholder="Digite seu nome"
          error={errors.nome}
        />
        <FormField
          label="Email"
          value={form.email}
          onChangeText={value => handleChange('email', value)}
          placeholder="Digite seu email"
          error={errors.email}
        />
        <FormField
          label="Senha"
          value={form.senha}
          onChangeText={value => handleChange('senha', value)}
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.senha}
        />
        <FormField
          label="Telefone"
          value={form.telefone}
          onChangeText={value => handleChange('telefone', value)}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          error={errors.telefone}
        />
        <FormField
          label="Setor"
          value={form.setor}
          onChangeText={value => handleChange('setor', value)}
          placeholder="Digite seu setor"
          error={errors.setor}
        />
      </BaseForm>
    </View>
  );
}
