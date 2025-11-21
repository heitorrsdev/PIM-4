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
import styles from './style';

export default function ChamadosScreen() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
          <BaseButton onPress={() => setModalVisible(true)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </BaseButton>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <FlatList
          data={chamados}
          keyExtractor={(item) => item.chamadoID}
          renderItem={({ item }) => <ChamadoCard chamado={item} />}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📋</Text>
              <Text style={styles.emptyTitle}>Nenhum chamado</Text>
              <Text style={styles.emptySubtitle}>
                Clique no botão + para abrir um novo chamado
              </Text>
            </View>
          }
        />
      </View>

      <BaseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Novo Chamado"
      >
        <ChamadoForm onSuccess={handleSuccessCreate} />
      </BaseModal>
    </View>
  );
}
