import React from 'react';
import { Text, View } from 'react-native';

import { BaseModal } from '@/components/modals';
import { Chamado } from '@/services/chamados';

import styles from './style';

interface Props {
  chamado: Chamado | null;
  visible: boolean;
  onClose: () => void;
}

export function ChamadoInfoModal({ chamado, visible, onClose }: Props) {
  if (!chamado) return null;

  return (
    <BaseModal visible={visible} onClose={onClose} title="Informações do Chamado">
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.label}>ID do Chamado</Text>
          <Text style={styles.value}>{chamado.chamadoID}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Título</Text>
          <Text style={styles.value}>{chamado.titulo}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.value}>{chamado.descricao}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.halfSection}>
            <Text style={styles.label}>Status</Text>
            <View style={[
              styles.badge,
              chamado.status === 'Fechado' ? styles.statusClosed : styles.statusBadge
            ]}>
              <Text style={styles.badgeText}>{chamado.status}</Text>
            </View>
          </View>

          <View style={styles.halfSection}>
            <Text style={styles.label}>Prioridade</Text>
            <View style={[
              styles.badge,
              chamado.prioridade === 'Alta' && styles.priorityHigh,
              chamado.prioridade === 'Média' && styles.priorityMedium,
              chamado.prioridade === 'Baixa' && styles.priorityLow,
            ]}>
              <Text style={styles.badgeText}>{chamado.prioridade}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>Nome do Usuário</Text>
          <Text style={styles.value}>{chamado.nomeDoUsuario}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Email do Usuário</Text>
          <Text style={styles.value}>{chamado.emailDoUsuario}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Setor do Usuário</Text>
          <Text style={styles.value}>{chamado.setorDoUsuario}</Text>
        </View>

        {chamado.resposta && (
          <>
            <View style={styles.divider} />
            <View style={styles.section}>
              <Text style={styles.label}>Resposta do Técnico</Text>
              <Text style={styles.value}>{chamado.resposta}</Text>
            </View>
          </>
        )}
      </View>
    </BaseModal>
  );
}
