import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { useToast,useUser } from '@/hooks';
import { Chamado, ChamadoService } from '@/services/chamados';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { TicketResponseModal } from './components/TicketResponseModal';
import styles from './style';

export default function TecnicoScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const { userLoading, userType } = useUser();
  const { showToast } = useToast();

  const fetchChamadosPendentes = async () => {
    try {
      const pendentes = await ChamadoService.getByStatus('Pendente');
      setChamados(pendentes);
    } catch {
      showToast('Não foi possível buscar chamados pendentes');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Tecnico') {
      showToast('Apenas técnicos podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    fetchChamadosPendentes();
  }, [userLoading, userType]);

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
