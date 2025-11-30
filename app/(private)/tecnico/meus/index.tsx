import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import LinkButton from '@/components/buttons/LinkButton';
import { useTecnicoChamados } from '@/hooks/useTecnicoChamados';
import { Chamado } from '@/services/chamados';

import { ChamadoCardTecnico } from '../components/ChamadoCardTecnico';
import { TecnicoFilterButtons } from '../components/TecnicoFilterButtons';
import { TicketResponseModal } from '../components/TicketResponseModal';
import styles from '../style';

export default function MeusChamadosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    chamadosEscolhidos,
    filteredChamadosEscolhidos,
    handleFilterEscolhidosChange,
    handleRefresh,
    handleRespostaSuccess,
    refreshing,
    selectedChamado,
    selectedFilterEscolhidos,
    setSelectedChamado,
  } = useTecnicoChamados();

  const handleSubmit = (chamado: Chamado) => {
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
      <View style={[styles.header, { marginTop: 0 }]}>
        <Text style={styles.pageTitle}>Meus Chamados</Text>
        <View style={[styles.badge, { backgroundColor: '#eab308' }]}>
          <Text style={styles.badgeText}>{chamadosEscolhidos.length}</Text>
        </View>
      </View>

      <View style={styles.navigationButtons}>
        <LinkButton href="/tecnico/abertos">
          Chamados em Aberto
        </LinkButton>

        <LinkButton href="/tecnico/resolvidos">
          Chamados Resolvidos
        </LinkButton>
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

      <TicketResponseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        chamado={selectedChamado}
        onSuccess={handleSuccess}
      />
    </ScrollView>
  );
}
