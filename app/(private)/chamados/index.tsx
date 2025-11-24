import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { BaseModal } from '@/components/modals';
import { useUser } from '@/hooks';
import { ChamadoService } from '@/services/chamados';
import { Chamado } from '@/services/chamados/chamado.types';
import { showAlert } from '@/utils';

import { ChamadoCard } from './components/ChamadoCard';
import { ChamadoForm } from './components/ChamadoForm';
import { ChamadoInfoModal } from './components/ChamadoInfoModal';
import { ChatbotModal } from './components/ChatbotModal';
import { DeleteChamadoModal } from './components/DeleteChamadoModal';
import { EditChamadoForm } from './components/EditChamadoForm';
import styles from './style';

export default function ChamadosScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
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

  const fetchChamados = async () => {
    try {
      const data = await ChamadoService.getByEmail(userEmail);
      setChamados(data);
    } catch {
      showAlert('Erro', 'Não foi possível buscar chamados');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Usuario') {
      showAlert('Erro', 'Apenas usuários podem acessar essa tela.');
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
      </View>

      <View style={styles.contentWrapper}>
        <FlatList
          data={chamados}
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
