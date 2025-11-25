import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { BaseForm } from '@/components/forms';
import { TextField } from '@/components/inputs';
import { BaseModal } from '@/components/modals';
import { useToast } from '@/hooks';
import { Chamado, ChamadoService, ChamadoStatus } from '@/services/chamados';

import styles from './style';

interface Props {
  visible: boolean;
  onClose: () => void;
  chamado: Chamado | null;
  onSuccess: () => void;
}

export function TicketResponseModal({ visible, onClose, chamado, onSuccess }: Props) {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  const resetForm = () => {
    setResponse('');
    setError(null);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!response.trim()) return setError('A resposta é obrigatória');
    if (!chamado) return;

    setLoading(true);
    try {
      const updatedChamado = { ...chamado, resposta: response, status: ChamadoStatus.Fechado };
      const { chamadoID, ...apiPayload } = updatedChamado;
      await ChamadoService.update(chamado.chamadoID, apiPayload);

      showToast('Chamado respondido com sucesso!');
      resetForm();
      onSuccess();
      onClose();
    } catch {
      showToast('Não foi possível responder o chamado.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChangeText = (text: string) => {
    setResponse(text);
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
            value={response}
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
