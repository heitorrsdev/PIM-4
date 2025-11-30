import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import LinkButton from '@/components/buttons/LinkButton';
import { useTecnicoChamados } from '@/hooks/useTecnicoChamados';

import { ChamadoCardTecnico } from '../components/ChamadoCardTecnico';
import { TecnicoFilterButtons } from '../components/TecnicoFilterButtons';
import { TicketResponseModal } from '../components/TicketResponseModal';
import styles from '../style';

export default function ChamadosAbertosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    chamadosAbertos,
    filteredChamadosAbertos,
    handleEscolherChamado,
    handleFilterAbertosChange,
    handleRefresh,
    handleRespostaSuccess,
    refreshing,
    selectedChamado,
    selectedFilterAbertos,
  } = useTecnicoChamados();

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
        <Text style={styles.pageTitle}>Chamados em Aberto</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{chamadosAbertos.length}</Text>
        </View>
      </View>

      <View style={styles.navigationButtons}>
        <LinkButton href="/tecnico/meus">
          Meus Chamados
        </LinkButton>

        <LinkButton href="/tecnico/resolvidos">
          Chamados Resolvidos
        </LinkButton>
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

      <TicketResponseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        chamado={selectedChamado}
        onSuccess={handleSuccess}
      />
    </ScrollView>
  );
}
