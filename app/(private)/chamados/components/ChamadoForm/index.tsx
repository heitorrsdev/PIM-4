import React, { useState } from 'react';
import { Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { BaseForm } from '@/components/forms';
import { TextField } from '@/components/inputs';
import { useUser } from '@/hooks';
import { ChamadoPayload, ChamadoPrioridade, ChamadoService , ChamadoStatus } from '@/services/chamados';
import { showAlert } from '@/utils';

import styles from './style';

interface Props {
  onSuccess: () => void;
}

export function ChamadoForm({ onSuccess }: Props) {
  const { user } = useUser();

  const defaultForm: ChamadoPayload = {
    descricao: '',
    emailDoUsuario: user?.email || '',
    nomeDoUsuario: user?.nome || '',
    prioridade: ChamadoPrioridade.Baixa,
    setorDoUsuario: user?.setor || '',
    status: ChamadoStatus.Aberto,
    titulo: '',
  };

  const [form, setForm] = useState<ChamadoPayload>(defaultForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleChange = (key: keyof ChamadoPayload, value: string) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: null });
  };

  const validateForm = (f: ChamadoPayload): boolean => {
    const newErrors: Record<string, string | null> = {};
    let isValid: boolean = true;

    for (const [key, value] of Object.entries(f)) {
      if (!value?.trim()) {
        newErrors[key] = 'Campo obrigatório';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

    const handleSubmit = async (): Promise<void> => {
      if (!validateForm(form)) {
        showAlert('Campos obrigatórios', 'Preencha todos os campos antes de continuar.');
        return;
      }

      setLoading(true);
      try {
        await ChamadoService.create(form);
        showAlert('Sucesso', 'Chamado criado com sucesso!');
        onSuccess();
        setForm(defaultForm);
      } catch {
        showAlert('Erro', 'Não foi possível criar o chamado.');
      } finally {
        setLoading(false);
      }
    };

    const prioridadeOptions = Object.values(ChamadoPrioridade).map((p) => ({
      label: p,
      value: p,
    }));

    return (
      <BaseForm
        onSubmit={handleSubmit}
        isValid={!loading}
        submitLabel={loading ? 'Enviando...' : 'Criar chamado'}
      >
        <TextField
          label="Título"
          value={form.titulo}
          onChangeText={(v) => handleChange('titulo', v)}
          error={errors.titulo}
        />

        <TextField
          label="Descrição"
          value={form.descricao}
          onChangeText={(v) => handleChange('descricao', v)}
          error={errors.descricao}
          multiline
          numberOfLines={2}
        />

        <Text style={styles.label}>Prioridade</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          data={prioridadeOptions}
          labelField="label"
          onChange={(item) => handleChange('prioridade', item.value)}
          placeholder="Selecione a prioridade"
          style={styles.dropdown}
          value={form.prioridade}
          valueField="value"
        />
      </BaseForm>
    );
}
