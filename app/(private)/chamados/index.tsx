import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { BaseModal } from '@/components/modals';
import { useToast,useUser  } from '@/hooks';
import { ChamadoService } from '@/services/chamados';
import { Chamado } from '@/services/chamados/chamado.types';

import { ChamadoCard } from './components/ChamadoCard';
import { ChamadoForm } from './components/ChamadoForm';
import { ChamadoInfoModal } from './components/ChamadoInfoModal';
import { ChatbotModal } from './components/ChatbotModal';
import { DeleteChamadoModal } from './components/DeleteChamadoModal';
import { EditChamadoForm } from './components/EditChamadoForm';
import styles from './style';

export default function ChamadosScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [filteredChamados, setFilteredChamados] = useState<Chamado[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | 'Aberto' | 'Pendente' | 'Fechado'>('Todos');
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const { user, userLoading } = useUser();
  const userEmail = user?.email || '';
  const { userType } = useUser();
  const { showToast } = useToast();

  const fetchChamados = async () => {
    try {
      const data = await ChamadoService.getByEmail(userEmail);
      setChamados(data);
      filterChamados(data, selectedFilter);
    } catch {
      showToast('Não foi possível buscar chamados');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const filterChamados = (data: Chamado[], filter: 'Todos' | 'Aberto' | 'Pendente' | 'Fechado') => {
    if (filter === 'Todos') {
      setFilteredChamados(data);
    } else {
      const filtered = data.filter(chamado => chamado.status === filter);
      setFilteredChamados(filtered);
    }
  };

  const handleFilterChange = (filter: 'Todos' | 'Aberto' | 'Pendente' | 'Fechado') => {
    setSelectedFilter(filter);
    filterChamados(chamados, filter);
  };

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Usuario') {
      showToast('Apenas usuários podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    if (userEmail) {
      fetchChamados();
    }
  }, [userLoading, userType, userEmail]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamados();
  };

  const handleSuccessCreate = () => {
    setModalVisible(false);
    fetchChamados();
  };

  const handleEdit = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setEditModalVisible(true);
  };

  const handleDelete = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setDeleteModalVisible(true);
  };

  const handleInfo = (chamado: Chamado) => {
    setSelectedChamado(chamado);
    setInfoModalVisible(true);
  };

  const handleSuccessEdit = () => {
    setEditModalVisible(false);
    setSelectedChamado(null);
    fetchChamados();
  };

  const handleSuccessDelete = () => {
    setDeleteModalVisible(false);
    setSelectedChamado(null);
    fetchChamados();
  };

  if (loading || userLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0A2E50" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Chamados</Text>
          <View style={styles.headerButtons}>
            <BaseButton onPress={() => setChatbotVisible(true)} style={styles.aiButton}>
              <Text style={styles.aiButtonText}>IA</Text>
            </BaseButton>
            <BaseButton onPress={() => setModalVisible(true)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </BaseButton>
          </View>
        </View>
        
        {/* Filtros por Status */}
        <View style={styles.filterContainer}>
          <BaseButton 
            onPress={() => handleFilterChange('Todos')} 
            style={[styles.filterButton, selectedFilter === 'Todos' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilter === 'Todos' && styles.filterButtonTextActive]}>
              Todos ({chamados.length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterChange('Aberto')} 
            style={[styles.filterButton, selectedFilter === 'Aberto' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilter === 'Aberto' && styles.filterButtonTextActive]}>
              Aberto ({chamados.filter(c => c.status === 'Aberto').length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterChange('Pendente')} 
            style={[styles.filterButton, selectedFilter === 'Pendente' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilter === 'Pendente' && styles.filterButtonTextActive]}>
              Pendente ({chamados.filter(c => c.status === 'Pendente').length})
            </Text>
          </BaseButton>
          <BaseButton 
            onPress={() => handleFilterChange('Fechado')} 
            style={[styles.filterButton, selectedFilter === 'Fechado' && styles.filterButtonActive]}
          >
            <Text style={[styles.filterButtonText, selectedFilter === 'Fechado' && styles.filterButtonTextActive]}>
              Fechado ({chamados.filter(c => c.status === 'Fechado').length})
            </Text>
          </BaseButton>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <FlatList
          data={filteredChamados}
          keyExtractor={(item) => item.chamadoID}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📋</Text>
              <Text style={styles.emptyTitle}>Nenhum chamado</Text>
              <Text style={styles.emptySubtitle}>
                Clique no botão + para abrir um novo chamado
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <ChamadoCard
              chamado={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onInfo={handleInfo}
            />
          )}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <BaseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Novo Chamado"
      >
        <ChamadoForm onSuccess={handleSuccessCreate} />
      </BaseModal>

      <ChatbotModal
        visible={chatbotVisible}
        onClose={() => setChatbotVisible(false)}
      />

      <BaseModal
        visible={editModalVisible}
        onClose={() => {
          setEditModalVisible(false);
          setSelectedChamado(null);
        }}
        title="Editar Chamado"
      >
        {selectedChamado && (
          <EditChamadoForm
            chamado={selectedChamado}
            onSuccess={handleSuccessEdit}
          />
        )}
      </BaseModal>

      <DeleteChamadoModal
        chamado={selectedChamado}
        visible={deleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          setSelectedChamado(null);
        }}
        onSuccess={handleSuccessDelete}
      />

      <ChamadoInfoModal
        chamado={selectedChamado}
        visible={infoModalVisible}
        onClose={() => {
          setInfoModalVisible(false);
          setSelectedChamado(null);
        }}
      />
    </View>
  );
}
