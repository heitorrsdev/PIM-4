import React from 'react';
import { Text, View } from 'react-native';

import { Chamado } from '@/services/chamados';

import styles from './style';

interface Props {
  chamado: Chamado;
}

export function ChamadoCard({ chamado }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{chamado.título}</Text>
      <Text style={styles.desc}>{chamado.descricao}</Text>
      <Text style={styles.meta}>
        Prioridade: {chamado.prioridade} | Status: {chamado.status}
      </Text>
      <Text style={styles.meta}>Usuário: {chamado.nomeDoUsuario}</Text>
    </View>
  );
}
