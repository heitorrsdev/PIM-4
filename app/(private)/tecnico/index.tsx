import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { Chamado, ChamadoService, ChamadoStatus } from '@/services/chamados';
import { showAlert } from '@/utils';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { RespostaChamadoModal } from './components/RespostaChamadoModal';
import styles from './style';

export default function TecnicoScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);

  const fetchChamadosPendentes = async () => {
    try {
      const data = await ChamadoService.list();
      
      // TODO: Remover este filtro assim que possível. Por enquanto usaremos isso, mas o Enrico está criando um endpoint de filtragem de entidade que fará isso para nós.
      //é apenas uma solução provisória.
      // Filtrar apenas chamados com status Pendente ou Aberto
      const pendentes = data.filter(
        (chamado) => {
          const status = chamado.status?.trim();
          return status === ChamadoStatus.Pendente || status === ChamadoStatus.Aberto;
        }
      );
      
      setChamados(pendentes);
    } catch (error) {
      showAlert('Erro', 'Não foi possível buscar chamados pendentes');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchChamadosPendentes();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamadosPendentes();
  };

  const handleRespond = (chamado: Chamado) => {
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
    <>
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
              onRespond={() => handleRespond(chamado)}
            />
          ))
        )}
      </ScrollView>

      <RespostaChamadoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        chamado={selectedChamado}
        onSuccess={handleRespostaSuccess}
      />
    </>
  );
}
