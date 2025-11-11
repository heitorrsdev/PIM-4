import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';

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

  const fetchChamados = async () => {
    try {
      const data = await ChamadoService.list();
      setChamados(data);
    } catch {
      showAlert('Erro', 'Não foi possível buscar chamados');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchChamados();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchChamados();
  };

  if (loading) return <Text style={styles.empty}>Carregando...</Text>;

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
