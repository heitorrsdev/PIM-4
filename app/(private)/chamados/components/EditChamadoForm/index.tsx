import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { TextField } from '@/components/inputs';
import { useToast } from '@/hooks';
import { ChamadoService } from '@/services/chamados';
import { Chamado, ChamadoPrioridade } from '@/services/chamados/chamado.types';

import styles from './style';

interface Props {
  chamado: Chamado;
  onSuccess: () => void;
}

export function EditChamadoForm({ chamado, onSuccess }: Props) {
  const [titulo, setTitulo] = useState(chamado.titulo);
  const [descricao, setDescricao] = useState(chamado.descricao);
  const [prioridade, setPrioridade] = useState(chamado.prioridade);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async () => {
    if (!titulo.trim() || !descricao.trim()) {
      showToast('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      await ChamadoService.update(chamado.chamadoID, {
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        prioridade,
        emailDoUsuario: chamado.emailDoUsuario,
        nomeDoUsuario: chamado.nomeDoUsuario,
        setorDoUsuario: chamado.setorDoUsuario,
        status: chamado.status,
      });
      showToast('Chamado atualizado com sucesso!');
      onSuccess();
    } catch {
      showToast('Não foi possível atualizar o chamado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título do chamado"
      />

      <TextField
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descreva o problema"
        multiline
        numberOfLines={4}
      />

      <View style={styles.priorityContainer}>
        <Text style={styles.label}>Prioridade</Text>
        <View style={styles.priorityButtons}>
          <BaseButton
            onPress={() => setPrioridade(ChamadoPrioridade.Baixa)}
            style={[
              styles.priorityButton,
              prioridade === ChamadoPrioridade.Baixa && styles.priorityButtonActive,
            ]}
          >
            <Text
              style={[
                styles.priorityButtonText,
                prioridade === ChamadoPrioridade.Baixa && styles.priorityButtonTextActive,
              ]}
            >
              Baixa
            </Text>
          </BaseButton>

          <BaseButton
            onPress={() => setPrioridade(ChamadoPrioridade.Média)}
            style={[
              styles.priorityButton,
              prioridade === ChamadoPrioridade.Média && styles.priorityButtonActive,
            ]}
          >
            <Text
              style={[
                styles.priorityButtonText,
                prioridade === ChamadoPrioridade.Média && styles.priorityButtonTextActive,
              ]}
            >
              Média
            </Text>
          </BaseButton>

          <BaseButton
            onPress={() => setPrioridade(ChamadoPrioridade.Alta)}
            style={[
              styles.priorityButton,
              prioridade === ChamadoPrioridade.Alta && styles.priorityButtonActive,
            ]}
          >
            <Text
              style={[
                styles.priorityButtonText,
                prioridade === ChamadoPrioridade.Alta && styles.priorityButtonTextActive,
              ]}
            >
              Alta
            </Text>
          </BaseButton>
        </View>
      </View>

      <BaseButton onPress={handleSubmit} disabled={loading} style={styles.submitButton}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Atualizar</Text>
        )}
      </BaseButton>
    </View>
  );
}
