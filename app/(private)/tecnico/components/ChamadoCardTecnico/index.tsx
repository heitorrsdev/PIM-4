import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { BaseModal } from '@/components/modals';
import { Chamado } from '@/services/chamados';

import styles from './style';

interface Props {
  chamado: Chamado;
  onSubmit: () => void;
  buttonText?: string;
  showOnlyDetails?: boolean;
}

function getPriorityColor(prioridade: string): string {
  const priority = prioridade.toLowerCase().trim();
  if (priority === 'baixa') return '#22c55e';
  if (priority === 'média' || priority === 'media') return '#eab308';
  if (priority === 'alta') return '#ef4444';
  return '#6b7280';
}

export function ChamadoCardTecnico({ chamado, onSubmit, buttonText = 'Responder', showOnlyDetails = false }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{chamado.titulo}</Text>
        <View style={[styles.badge, { backgroundColor: getPriorityColor(chamado.prioridade) }]}>
          <Text style={styles.badgeText}>{chamado.prioridade}</Text>
        </View>
      </View>

      <Text style={styles.desc} numberOfLines={2}>{chamado.descricao}</Text>

      <View style={styles.metaContainer}>
        <Text style={styles.meta}>
          Usuário: {chamado.nomeDoUsuario}
        </Text>
        <Text style={styles.meta}>
          Setor: {chamado.setorDoUsuario}
        </Text>
      </View>

      <View style={styles.actions}>
        <BaseButton onPress={() => setShowDetails(true)} style={showOnlyDetails ? styles.fullWidthButton : styles.detailsButton}>
          Ver Detalhes
        </BaseButton>

        {!showOnlyDetails && (
          <BaseButton onPress={onSubmit} style={styles.submitButton}>
            {buttonText}
          </BaseButton>
        )}
      </View>

      <BaseModal visible={showDetails} onClose={() => setShowDetails(false)} title="Detalhes do Chamado">
        <View style={styles.detailsContent}>
          <Text style={styles.detailLabel}>Título:</Text>
          <Text style={styles.detailValue}>{chamado.titulo}</Text>

          <Text style={styles.detailLabel}>Descrição:</Text>
          <Text style={styles.detailValue}>{chamado.descricao}</Text>

          <Text style={styles.detailLabel}>Prioridade:</Text>
          <Text style={styles.detailValue}>{chamado.prioridade}</Text>

          <Text style={styles.detailLabel}>Técnico Responsável:</Text>
          <Text style={styles.detailValue}>
            {chamado.tecnicoResponsavel || 'Ainda não foi selecionado por nenhum técnico'}
          </Text>

          <Text style={styles.detailLabel}>Usuário:</Text>
          <Text style={styles.detailValue}>{chamado.nomeDoUsuario}</Text>

          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{chamado.emailDoUsuario}</Text>

          <Text style={styles.detailLabel}>Setor:</Text>
          <Text style={styles.detailValue}>{chamado.setorDoUsuario}</Text>

          {chamado.resposta && (
            <>
              <Text style={styles.detailLabel}>Resposta do Técnico:</Text>
              <Text style={styles.detailValue}>{chamado.resposta}</Text>
            </>
          )}
        </View>
      </BaseModal>
    </View>
  );
}
