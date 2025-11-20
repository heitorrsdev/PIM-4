import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';

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
  const { user, loadingUser } = useUser();
  const userEmail = user?.email || '';

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
  if (!loadingUser && userEmail) {
    fetchChamados();
  }
}, [loadingUser, userEmail]);


  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamados();
  };

  if (loading || loadingUser) return <Text style={styles.empty}>Carregando...</Text>;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      <ChamadoForm onSuccess={fetchChamados} />
      {chamados.length === 0 ? (
        <Text style={styles.empty}>Nenhum chamado encontrado.</Text>
      ) : (
        chamados.map((c) => <ChamadoCard key={c.chamadoID} chamado={c} />)
      )}
    </ScrollView>
  );
}
