import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { useUser } from '@/hooks';
import { Chamado, ChamadoService, ChamadoStatus } from '@/services/chamados';
import { showAlert } from '@/utils';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { TicketResponseModal } from './components/TicketResponseModal';
import styles from './style';

export default function TecnicoScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const { loadingUser, userType } = useUser();

  const fetchChamadosPendentes = async () => {
    try {
      const data = await ChamadoService.getAll();

      // Remover este filtro assim que possível. Por enquanto usaremos isso, mas o Enrico está criando um endpoint de filtragem de entidade que fará isso para nós. É apenas uma solução provisória.
      const pendentes = data.filter(
        (chamado) => {
          const status = chamado.status?.trim();
          return status === ChamadoStatus.Pendente;
        }
      );

      setChamados(pendentes);
    } catch {
      showAlert('Erro', 'Não foi possível buscar chamados pendentes');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (loadingUser) return;

    if (userType !== 'Tecnico') {
      showAlert('Erro', 'Apenas técnicos podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    fetchChamadosPendentes();
  }, [loadingUser, userType]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamadosPendentes();
  };

  const handleSubmit = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleRespostaSuccess = async () => {
    await fetchChamadosPendentes();
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.loadingText}>Carregando chamados...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Chamados Pendentes</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{chamados.length}</Text>
        </View>
      </View>

      {chamados.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>🎉</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado pendente!</Text>
          <Text style={styles.emptySubtitle}>
            Todos os chamados foram atendidos.
          </Text>
        </View>
        ) : (
        chamados.map((chamado) => (
          <ChamadoCardTecnico
            key={chamado.chamadoID}
            chamado={chamado}
            onSubmit={() => handleSubmit(chamado)}
          />
        ))
      )}

      <TicketResponseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        chamado={selectedChamado}
        onSuccess={handleRespostaSuccess}
      />
    </ScrollView>
  );
}
