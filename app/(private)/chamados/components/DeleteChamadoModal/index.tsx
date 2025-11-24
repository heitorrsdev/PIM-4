import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { BaseModal } from '@/components/modals';
import { ChamadoService } from '@/services/chamados';
import { Chamado } from '@/services/chamados/chamado.types';
import { showAlert } from '@/utils';

import styles from './style';

interface Props {
  chamado: Chamado | null;
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteChamadoModal({ chamado, visible, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!chamado) return;

    setLoading(true);
    try {
      await ChamadoService.delete(chamado.chamadoID);
      showAlert('Sucesso', 'Chamado excluído com sucesso!');
      onSuccess();
      onClose();
    } catch {
      showAlert('Erro', 'Não foi possível excluir o chamado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseModal visible={visible} onClose={onClose} title="Excluir Chamado">
      <View style={styles.container}>
        <Text style={styles.message}>
          Tem certeza que deseja excluir o chamado &rdquo;{chamado?.titulo}&rdquo;?
        </Text>
        <Text style={styles.warning}>Esta ação não pode ser desfeita.</Text>

        <View style={styles.buttons}>
          <BaseButton
            onPress={onClose}
            style={styles.cancelButton}
            disabled={loading}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </BaseButton>

          <BaseButton
            onPress={handleDelete}
            style={styles.deleteButton}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.deleteButtonText}>Excluir</Text>
            )}
          </BaseButton>
        </View>
      </View>
    </BaseModal>
  );
}
