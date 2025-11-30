import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { BaseModal } from '@/components/modals';
import { useChamados, useToast, useUser } from '@/hooks';
import { Chamado } from '@/services/chamados/chamado.types';

import { ChamadoCard } from './components/ChamadoCard';
import { ChamadoFilterButtons } from './components/ChamadoFilterButtons';
import { ChamadoForm } from './components/ChamadoForm';
import { ChamadoInfoModal } from './components/ChamadoInfoModal';
import { ChatbotModal } from './components/ChatbotModal';
import { DeleteChamadoModal } from './components/DeleteChamadoModal';
import { EditChamadoForm } from './components/EditChamadoForm';
import styles from './style';

export default function ChamadosScreen() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { showToast } = useToast();
  const { user, userLoading, userType } = useUser();

  const {
    chamados,
    fetchChamados,
    filteredChamados,
    handleFilterChange,
    handleRefresh,
    handleSuccessAction,
    loading,
    refreshing,
    selectedChamado,
    selectedFilter,
    setSelectedChamado,
  } = useChamados();

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Usuario') {
      showToast('Apenas usuários podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }

    if (user?.email) {
      fetchChamados();
    }
  }, [userLoading, userType, user?.email, fetchChamados, showToast]);

  const handleSuccessCreate = () => {
    setModalVisible(false);
    handleSuccessAction();
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
    handleSuccessAction();
  };

  const handleSuccessDelete = () => {
    setDeleteModalVisible(false);
    handleSuccessAction();
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

        <ChamadoFilterButtons
          chamados={chamados}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
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
