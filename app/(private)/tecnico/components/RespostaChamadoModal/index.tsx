import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { BaseForm } from '@/components/forms';
import { TextField } from '@/components/inputs';
import { BaseModal } from '@/components/modals';
import { Chamado, ChamadoService, ChamadoStatus } from '@/services/chamados';
import { showAlert } from '@/utils';

import styles from './style';

interface Props {
  visible: boolean;
  onClose: () => void;
  chamado: Chamado | null;
  onSuccess: () => void;
}

export function RespostaChamadoModal({ visible, onClose, chamado, onSuccess }: Props) {
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setResposta('');
    setError(null);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!resposta.trim()) return setError('A resposta é obrigatória');
    if (!chamado) return;

    setLoading(true);
    try {
      await ChamadoService.responder(chamado.chamadoID, chamado, resposta);
      
      showAlert('Sucesso', 'Chamado respondido com sucesso!');
      resetForm();
      onSuccess();
      onClose();
    } catch {
      showAlert('Erro', 'Não foi possível responder o chamado.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChangeText = (text: string) => {
    setResposta(text);
    if (error) setError(null);
  };

  if (!chamado) return null;

  return (
    <BaseModal visible={visible} onClose={handleClose} title="Responder Chamado">
      <View style={styles.container}>
        <View style={styles.chamadoInfo}>
          <Text style={styles.infoLabel}>Chamado:</Text>
          <Text style={styles.infoTitle}>{chamado.titulo}</Text>
          <Text style={styles.infoDesc}>{chamado.descricao}</Text>
          <View style={styles.divider} />
          <Text style={styles.infoLabel}>Usuário: {chamado.nomeDoUsuario}</Text>
          <Text style={styles.infoLabel}>Setor: {chamado.setorDoUsuario}</Text>
        </View>

        <BaseForm
          onSubmit={handleSubmit}
          submitLabel={loading ? 'Enviando...' : 'Enviar Resposta e Encerrar'}
          isValid={!loading}
        >
          <TextField
            label="Resposta do Técnico"
            value={resposta}
            onChangeText={handleChangeText}
            placeholder="Digite sua resposta detalhada para o chamado..."
            multiline
            numberOfLines={6}
            error={error}
          />
        </BaseForm>
      </View>
    </BaseModal>
  );
}
