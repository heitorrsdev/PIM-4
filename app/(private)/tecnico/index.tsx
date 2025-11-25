import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { useUser } from '@/hooks';
import { Chamado, ChamadoService } from '@/services/chamados';
import { Tecnico, TecnicoService } from '@/services/tecnicos';
import { showAlert } from '@/utils';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { TicketResponseModal } from './components/TicketResponseModal';
import styles from './style';

export default function TecnicoScreen() {
  const [chamadosAbertos, setChamadosAbertos] = useState<Chamado[]>([]);
  const [chamadosEscolhidos, setChamadosEscolhidos] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const { userLoading, userType, user } = useUser();

  const fetchChamados = async () => {
    try {
      const abertos = await ChamadoService.getByStatus('Aberto');
      const pendentes = await ChamadoService.getByStatus('Pendente');

      setChamadosAbertos(abertos);
      
      // Filtrar apenas os chamados do técnico logado
      const isTecnico = user && ('tecnicoID' in user || 'especialidade' in user);
      
      if (isTecnico) {
        const tecnico = user as Tecnico;
        const chamadosDoTecnico = pendentes.filter(
          chamado => chamado.tecnicoResponsavel === tecnico.email
        );
        setChamadosEscolhidos(chamadosDoTecnico);
      } else {
        setChamadosEscolhidos([]);
      }
    } catch {
      showAlert('Erro', 'Não foi possível buscar chamados');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Tecnico') {
      showAlert('Erro', 'Apenas técnicos podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    fetchChamados();
  }, [userLoading, userType]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamados();
  };

  const handleEscolherChamado = async (chamado: Chamado) => {
    try {
      if (!user) {
        showAlert('Erro', 'Usuário não identificado');
        return;
      }

      // Verificar se é técnico através do tecnicoID ou especialidade
      const isTecnico = 'tecnicoID' in user || 'especialidade' in user;
      
      if (!isTecnico) {
        showAlert('Erro', 'Usuário não identificado como técnico');
        return;
      }

      const tecnico = user as Tecnico;

      // Criar payload com todos os campos necessários
      const payload = {
        descricao: chamado.descricao,
        emailDoUsuario: chamado.emailDoUsuario,
        nomeDoUsuario: chamado.nomeDoUsuario,
        prioridade: chamado.prioridade,
        setorDoUsuario: chamado.setorDoUsuario,
        status: 'Pendente' as any,
        titulo: chamado.titulo,
        resposta: chamado.resposta || null,
        tecnicoResponsavel: tecnico.email,
      };

      console.log('Atualizando chamado:', chamado.chamadoID);
      console.log('Payload:', payload);

      // Atualizar o status do chamado para 'Pendente' e adicionar técnico responsável
      await ChamadoService.update(chamado.chamadoID, payload);

      // Recarregar os chamados do servidor para garantir sincronização
      await fetchChamados();

      showAlert('Sucesso', 'Chamado escolhido com sucesso!');
    } catch (error) {
      console.error('Erro ao escolher chamado:', error);
      showAlert('Erro', 'Não foi possível escolher o chamado');
    }
  };

  const handleSubmit = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleRespostaSuccess = async () => {
    await fetchChamados();
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

      {chamadosAbertos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>📋</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado em aberto!</Text>
          <Text style={styles.emptySubtitle}>
            Todos os chamados foram escolhidos.
          </Text>
        </View>
        ) : (
        chamadosAbertos.map((chamado) => (
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

      {chamadosEscolhidos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>✅</Text>
          <Text style={styles.emptyTitle}>Nenhum chamado escolhido ainda</Text>
          <Text style={styles.emptySubtitle}>
            Escolha chamados em aberto para trabalhar neles.
          </Text>
        </View>
      ) : (
        chamadosEscolhidos.map((chamado) => (
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
        onSuccess={handleRespostaSuccess}
      />
    </ScrollView>
  );
}
