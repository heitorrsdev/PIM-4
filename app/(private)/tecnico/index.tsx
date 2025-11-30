import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { useTecnicoChamados,useToast, useUser } from '@/hooks';
import { Chamado } from '@/services/chamados';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { TecnicoFilterButtons } from './components/TecnicoFilterButtons';
import { TicketResponseModal } from './components/TicketResponseModal';
import styles from './style';

export default function TecnicoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { showToast } = useToast();
  const { userLoading, userType } = useUser();

  const {
    chamadosAbertos,
    chamadosEscolhidos,
    chamadosResolvidos,
    fetchChamados,
    filteredChamadosAbertos,
    filteredChamadosEscolhidos,
    filteredChamadosResolvidos,
    handleEscolherChamado,
    handleFilterAbertosChange,
    handleFilterEscolhidosChange,
    handleFilterResolvidosChange,
    handleRefresh,
    handleRespostaSuccess,
    loading,
    refreshing,
    selectedChamado,
    selectedFilterAbertos,
    selectedFilterEscolhidos,
    selectedFilterResolvidos,
    setSelectedChamado,
  } = useTecnicoChamados();

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Tecnico') {
      showToast('Apenas técnicos podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    fetchChamados();
  }, [userLoading, userType, fetchChamados, showToast]);

  const handleSubmit = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleInfo = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleSuccess = async () => {
    setModalVisible(false);
    await handleRespostaSuccess();
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
      {/* Seção de Chamados Abertos */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Chamados em Aberto</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{chamadosAbertos.length}</Text>
        </View>
      </View>

      {chamadosAbertos.length > 0 && (
        <TecnicoFilterButtons
          chamados={chamadosAbertos}
          selectedFilter={selectedFilterAbertos}
          onFilterChange={handleFilterAbertosChange}
        />
      )}

      {filteredChamadosAbertos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>📋</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado encontrado!</Text>
          <Text style={styles.emptySubtitle}>
            {chamadosAbertos.length === 0 ? 'Todos os chamados foram escolhidos.' : 'Nenhum chamado com esta prioridade.'}
          </Text>
        </View>
      ) : (
        filteredChamadosAbertos.map((chamado) => (
          <ChamadoCardTecnico
            key={chamado.chamadoID}
            chamado={chamado}
            onSubmit={() => handleEscolherChamado(chamado)}
            buttonText="Escolher Chamado"
          />
        ))
      )}

      {/* Seção de Chamados Escolhidos (Pendentes) */}
      <View style={[styles.header, { marginTop: 30 }]}>
        <Text style={styles.pageTitle}>Meus Chamados</Text>
        <View style={[styles.badge, { backgroundColor: '#eab308' }]}>
          <Text style={styles.badgeText}>{chamadosEscolhidos.length}</Text>
        </View>
      </View>

      {chamadosEscolhidos.length > 0 && (
        <TecnicoFilterButtons
          chamados={chamadosEscolhidos}
          selectedFilter={selectedFilterEscolhidos}
          onFilterChange={handleFilterEscolhidosChange}
        />
      )}

      {filteredChamadosEscolhidos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>✅</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado encontrado</Text>
          <Text style={styles.emptySubtitle}>
            {chamadosEscolhidos.length === 0 ? 'Escolha chamados em aberto para trabalhar neles.' : 'Nenhum chamado com esta prioridade.'}
          </Text>
        </View>
      ) : (
        filteredChamadosEscolhidos.map((chamado) => (
          <ChamadoCardTecnico
            key={chamado.chamadoID}
            chamado={chamado}
            onSubmit={() => handleSubmit(chamado)}
            buttonText="Responder"
          />
        ))
      )}

      {/* Seção de Chamados Resolvidos */}
      <View style={[styles.header, { marginTop: 30 }]}>
        <Text style={styles.pageTitle}>Chamados Resolvidos</Text>
        <View style={[styles.badge, { backgroundColor: '#22c55e' }]}>
          <Text style={styles.badgeText}>{chamadosResolvidos.length}</Text>
        </View>
      </View>

      {chamadosResolvidos.length > 0 && (
        <TecnicoFilterButtons
          chamados={chamadosResolvidos}
          selectedFilter={selectedFilterResolvidos}
          onFilterChange={handleFilterResolvidosChange}
        />
      )}

      {filteredChamadosResolvidos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>🎉</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado resolvido</Text>
          <Text style={styles.emptySubtitle}>
            {chamadosResolvidos.length === 0 ? 'Você ainda não resolveu nenhum chamado.' : 'Nenhum chamado com esta prioridade.'}
          </Text>
        </View>
      ) : (
        filteredChamadosResolvidos.map((chamado) => (
          <ChamadoCardTecnico
            key={chamado.chamadoID}
            chamado={chamado}
            onSubmit={() => handleInfo(chamado)}
            buttonText="Ver Detalhes"
            showOnlyDetails={true}
          />
        ))
      )}

      <TicketResponseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        chamado={selectedChamado}
        onSuccess={handleSuccess}
      />
    </ScrollView>
  );
}
