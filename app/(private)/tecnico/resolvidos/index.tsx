import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import LinkButton from '@/components/buttons/LinkButton';
import { useTecnicoChamados } from '@/hooks/useTecnicoChamados';
import { Chamado } from '@/services/chamados';

import { ChamadoCardTecnico } from '../components/ChamadoCardTecnico';
import { TecnicoFilterButtons } from '../components/TecnicoFilterButtons';
import { TicketResponseModal } from '../components/TicketResponseModal';
import styles from '../style';

export default function ChamadosResolvidosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    chamadosResolvidos,
    filteredChamadosResolvidos,
    handleFilterResolvidosChange,
    handleRefresh,
    handleRespostaSuccess,
    refreshing,
    selectedChamado,
    selectedFilterResolvidos,
    setSelectedChamado,
  } = useTecnicoChamados();

  const handleInfo = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleSuccess = async () => {
    setModalVisible(false);
    await handleRespostaSuccess();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Chamados Resolvidos</Text>
        <View style={[styles.badge, { backgroundColor: '#22c55e' }]}>
          <Text style={styles.badgeText}>{chamadosResolvidos.length}</Text>
        </View>
      </View>

      <View style={styles.navigationButtons}>
        <LinkButton href="/tecnico/abertos">
          Chamados em Aberto
        </LinkButton>

        <LinkButton href="/tecnico/meus">
          Meus Chamados
        </LinkButton>
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
