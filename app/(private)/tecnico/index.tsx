import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { useToast,useUser } from '@/hooks';
import { Chamado, ChamadoService } from '@/services/chamados';
import { Tecnico } from '@/services/tecnicos';

import { ChamadoCardTecnico } from './components/ChamadoCardTecnico';
import { TicketResponseModal } from './components/TicketResponseModal';
import styles from './style';

export default function TecnicoScreen() {
  const [chamadosAbertos, setChamadosAbertos] = useState<Chamado[]>([]);
  const [filteredChamadosAbertos, setFilteredChamadosAbertos] = useState<Chamado[]>([]);
  const [chamadosEscolhidos, setChamadosEscolhidos] = useState<Chamado[]>([]);
  const [filteredChamadosEscolhidos, setFilteredChamadosEscolhidos] = useState<Chamado[]>([]);
  const [chamadosResolvidos, setChamadosResolvidos] = useState<Chamado[]>([]);
  const [filteredChamadosResolvidos, setFilteredChamadosResolvidos] = useState<Chamado[]>([]);
  const [selectedFilterAbertos, setSelectedFilterAbertos] = useState<'Todos' | 'Baixa' | 'Média' | 'Alta'>('Todos');
  const [selectedFilterEscolhidos, setSelectedFilterEscolhidos] = useState<'Todos' | 'Baixa' | 'Média' | 'Alta'>('Todos');
  const [selectedFilterResolvidos, setSelectedFilterResolvidos] = useState<'Todos' | 'Baixa' | 'Média' | 'Alta'>('Todos');
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const { showToast } = useToast();
  const { user, userLoading, userType } = useUser();

  const filterByPriority = (chamados: Chamado[], filter: 'Todos' | 'Baixa' | 'Média' | 'Alta') => {
    if (filter === 'Todos') return chamados;
    return chamados.filter(chamado => chamado.prioridade === filter);
  };

  const handleFilterAbertosChange = (filter: 'Todos' | 'Baixa' | 'Média' | 'Alta') => {
    setSelectedFilterAbertos(filter);
    setFilteredChamadosAbertos(filterByPriority(chamadosAbertos, filter));
  };

  const handleFilterEscolhidosChange = (filter: 'Todos' | 'Baixa' | 'Média' | 'Alta') => {
    setSelectedFilterEscolhidos(filter);
    setFilteredChamadosEscolhidos(filterByPriority(chamadosEscolhidos, filter));
  };

  const handleFilterResolvidosChange = (filter: 'Todos' | 'Baixa' | 'Média' | 'Alta') => {
    setSelectedFilterResolvidos(filter);
    setFilteredChamadosResolvidos(filterByPriority(chamadosResolvidos, filter));
  };

  const fetchChamados = async () => {
    try {
      const abertos = await ChamadoService.getByStatus('Aberto');
      const pendentes = await ChamadoService.getByStatus('Pendente');
      const fechados = await ChamadoService.getByStatus('Fechado');

      setChamadosAbertos(abertos);
      setFilteredChamadosAbertos(filterByPriority(abertos, selectedFilterAbertos));

      // Filtrar apenas os chamados do técnico logado
      const isTecnico = user && ('tecnicoID' in user || 'especialidade' in user);

      if (isTecnico) {
        const tecnico = user as Tecnico;
        const chamadosDoTecnico = pendentes.filter(
          chamado => chamado.tecnicoResponsavel === tecnico.email
        );
        setChamadosEscolhidos(chamadosDoTecnico);
        setFilteredChamadosEscolhidos(filterByPriority(chamadosDoTecnico, selectedFilterEscolhidos));

        const chamadosResolvidosDoTecnico = fechados.filter(
          chamado => chamado.tecnicoResponsavel === tecnico.email
        );
        setChamadosResolvidos(chamadosResolvidosDoTecnico);
        setFilteredChamadosResolvidos(filterByPriority(chamadosResolvidosDoTecnico, selectedFilterResolvidos));
      } else {
        setChamadosEscolhidos([]);
        setFilteredChamadosEscolhidos([]);
        setChamadosResolvidos([]);
        setFilteredChamadosResolvidos([]);
      }
    } catch {
      showToast('Não foi possível buscar chamados');
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

    fetchChamados();
  }, [userLoading, userType]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamados();
  };

  const handleEscolherChamado = async (chamado: Chamado) => {
    try {
      if (!user) {
        showToast('Usuário não identificado');
        return;
      }

      // Verificar se é técnico através do tecnicoID ou especialidade
      const isTecnico = 'tecnicoID' in user || 'especialidade' in user;

      if (!isTecnico) {
        showToast('Usuário não identificado como técnico');
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

      showToast('Chamado escolhido com sucesso!');
    } catch (error) {
      console.error('Erro ao escolher chamado:', error);
      showToast('Não foi possível escolher o chamado');
    }
  };

  const handleSubmit = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setModalVisible(true);
  };

  const handleInfo = (chamado: Chamado) => {
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

      {chamadosAbertos.length > 0 &&
        <View style={styles.filterContainer}>
          <BaseButton 
            onPress={() => handleFilterAbertosChange('Todos')} 
            style={[styles.filterButton, selectedFilterAbertos === 'Todos' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilterAbertos === 'Todos' && styles.filterButtonTextActive]}>
              Todos ({chamadosAbertos.length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterAbertosChange('Baixa')} 
            style={[styles.filterButton, selectedFilterAbertos === 'Baixa' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilterAbertos === 'Baixa' && styles.filterButtonTextActive]}>
              Baixa ({chamadosAbertos.filter(c => c.prioridade === 'Baixa').length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterAbertosChange('Média')} 
            style={[styles.filterButton, selectedFilterAbertos === 'Média' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilterAbertos === 'Média' && styles.filterButtonTextActive]}>
              Média ({chamadosAbertos.filter(c => c.prioridade === 'Média').length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterAbertosChange('Alta')} 
            style={[styles.filterButton, selectedFilterAbertos === 'Alta' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilterAbertos === 'Alta' && styles.filterButtonTextActive]}>
              Alta ({chamadosAbertos.filter(c => c.prioridade === 'Alta').length})
            </Text>
          </BaseButton>
        </View>
      }
      

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

      <View style={styles.filterContainer}>
        <BaseButton 
          onPress={() => handleFilterEscolhidosChange('Todos')} 
          style={[styles.filterButton, selectedFilterEscolhidos === 'Todos' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterEscolhidos === 'Todos' && styles.filterButtonTextActive]}>
            Todos ({chamadosEscolhidos.length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterEscolhidosChange('Baixa')} 
          style={[styles.filterButton, selectedFilterEscolhidos === 'Baixa' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterEscolhidos === 'Baixa' && styles.filterButtonTextActive]}>
            Baixa ({chamadosEscolhidos.filter(c => c.prioridade === 'Baixa').length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterEscolhidosChange('Média')} 
          style={[styles.filterButton, selectedFilterEscolhidos === 'Média' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterEscolhidos === 'Média' && styles.filterButtonTextActive]}>
            Média ({chamadosEscolhidos.filter(c => c.prioridade === 'Média').length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterEscolhidosChange('Alta')} 
          style={[styles.filterButton, selectedFilterEscolhidos === 'Alta' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterEscolhidos === 'Alta' && styles.filterButtonTextActive]}>
            Alta ({chamadosEscolhidos.filter(c => c.prioridade === 'Alta').length})
          </Text>
        </BaseButton>
      </View>

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

      <View style={styles.filterContainer}>
        <BaseButton 
          onPress={() => handleFilterResolvidosChange('Todos')} 
          style={[styles.filterButton, selectedFilterResolvidos === 'Todos' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterResolvidos === 'Todos' && styles.filterButtonTextActive]}>
            Todos ({chamadosResolvidos.length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterResolvidosChange('Baixa')} 
          style={[styles.filterButton, selectedFilterResolvidos === 'Baixa' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterResolvidos === 'Baixa' && styles.filterButtonTextActive]}>
            Baixa ({chamadosResolvidos.filter(c => c.prioridade === 'Baixa').length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterResolvidosChange('Média')} 
          style={[styles.filterButton, selectedFilterResolvidos === 'Média' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterResolvidos === 'Média' && styles.filterButtonTextActive]}>
            Média ({chamadosResolvidos.filter(c => c.prioridade === 'Média').length})
          </Text>
        </BaseButton>
        <BaseButton 
          onPress={() => handleFilterResolvidosChange('Alta')} 
          style={[styles.filterButton, selectedFilterResolvidos === 'Alta' && styles.filterButtonActive]}
        >
          <Text style={[styles.filterButtonText, selectedFilterResolvidos === 'Alta' && styles.filterButtonTextActive]}>
            Alta ({chamadosResolvidos.filter(c => c.prioridade === 'Alta').length})
          </Text>
        </BaseButton>
      </View>

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
        onSuccess={handleRespostaSuccess}
      />
    </ScrollView>
  );
}
