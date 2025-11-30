import { useCallback, useState } from 'react';

import { useToast, useUser } from '@/hooks';
import { ChamadoService } from '@/services/chamados';
import { Chamado } from '@/services/chamados/chamado.types';

type StatusFilter = 'Todos' | 'Aberto' | 'Pendente' | 'Fechado';

export function useChamados() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [filteredChamados, setFilteredChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<StatusFilter>('Todos');

  const { user } = useUser();
  const userEmail = user?.email || '';
  const { showToast } = useToast();

  const filterChamados = useCallback((data: Chamado[], filter: StatusFilter) => {
    if (filter === 'Todos') {
      setFilteredChamados(data);
    } else {
      const filtered = data.filter(chamado => chamado.status === filter);
      setFilteredChamados(filtered);
    }
  }, []);

  const fetchChamados = useCallback(async () => {
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
  }, [userEmail, selectedFilter, filterChamados, showToast]);

  const handleFilterChange = useCallback((filter: StatusFilter) => {
    setSelectedFilter(filter);
    filterChamados(chamados, filter);
  }, [chamados, filterChamados]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchChamados();
  }, [fetchChamados]);

  const handleSuccessAction = useCallback(() => {
    setSelectedChamado(null);
    fetchChamados();
  }, [fetchChamados]);

  return {
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
  };
}
