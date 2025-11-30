import { useCallback, useState } from 'react';

import { useToast, useUser } from '@/hooks';
import { Chamado, ChamadoService, ChamadoStatus } from '@/services/chamados';
import { Tecnico } from '@/services/tecnicos';

type Filters = 'Todos' | 'Baixa' | 'Média' | 'Alta';

const filterByPriority = (chamados: Chamado[], filter: Filters) => {
  if (filter === 'Todos') return chamados;
  return chamados.filter(chamado => chamado.prioridade === filter);
};

export function useTecnicoChamados() {
  const [chamadosAbertos, setChamadosAbertos] = useState<Chamado[]>([]);
  const [chamadosEscolhidos, setChamadosEscolhidos] = useState<Chamado[]>([]);
  const [chamadosResolvidos, setChamadosResolvidos] = useState<Chamado[]>([]);
  const [filteredChamadosAbertos, setFilteredChamadosAbertos] = useState<Chamado[]>([]);
  const [filteredChamadosEscolhidos, setFilteredChamadosEscolhidos] = useState<Chamado[]>([]);
  const [filteredChamadosResolvidos, setFilteredChamadosResolvidos] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<Chamado | null>(null);
  const [selectedFilterAbertos, setSelectedFilterAbertos] = useState<Filters>('Todos');
  const [selectedFilterEscolhidos, setSelectedFilterEscolhidos] = useState<Filters>('Todos');
  const [selectedFilterResolvidos, setSelectedFilterResolvidos] = useState<Filters>('Todos');

  const { showToast } = useToast();
  const { user } = useUser();
  const tecnico = user as Tecnico;

  const fetchChamados = useCallback(async () => {
    setLoading(true);
    try {
      const allChamados = await ChamadoService.getAll();

      const abertos = allChamados.filter(chamado => chamado.status === ChamadoStatus.Aberto);
      const pendentes = allChamados.filter(chamado => chamado.status === ChamadoStatus.Pendente);
      const fechados = allChamados.filter(chamado => chamado.status === ChamadoStatus.Fechado);

      setChamadosAbertos(abertos);
      setFilteredChamadosAbertos(filterByPriority(abertos, selectedFilterAbertos));

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
    } catch {
      showToast('Não foi possível buscar chamados');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [tecnico?.email, selectedFilterAbertos, selectedFilterEscolhidos, selectedFilterResolvidos, showToast]);

  const handleFilterAbertosChange = useCallback((filter: Filters) => {
    setSelectedFilterAbertos(filter);
    setFilteredChamadosAbertos(filterByPriority(chamadosAbertos, filter));
  }, [chamadosAbertos]);

  const handleFilterEscolhidosChange = useCallback((filter: Filters) => {
    setSelectedFilterEscolhidos(filter);
    setFilteredChamadosEscolhidos(filterByPriority(chamadosEscolhidos, filter));
  }, [chamadosEscolhidos]);

  const handleFilterResolvidosChange = useCallback((filter: Filters) => {
    setSelectedFilterResolvidos(filter);
    setFilteredChamadosResolvidos(filterByPriority(chamadosResolvidos, filter));
  }, [chamadosResolvidos]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchChamados();
  }, [fetchChamados]);

  const handleEscolherChamado = useCallback(async (chamado: Chamado) => {
    try {
      const payload = {
        descricao: chamado.descricao,
        emailDoUsuario: chamado.emailDoUsuario,
        nomeDoUsuario: chamado.nomeDoUsuario,
        prioridade: chamado.prioridade,
        resposta: chamado.resposta || null,
        setorDoUsuario: chamado.setorDoUsuario,
        status: ChamadoStatus.Pendente,
        tecnicoResponsavel: tecnico.email,
        titulo: chamado.titulo,
      };

      await ChamadoService.update(chamado.chamadoID, payload);
      await fetchChamados();

      showToast('Chamado escolhido com sucesso!');
    } catch {
      showToast('Não foi possível escolher o chamado');
    }
  }, [tecnico?.email, fetchChamados, showToast]);

  const handleRespostaSuccess = useCallback(async () => {
    await fetchChamados();
  }, [fetchChamados]);

  return {
    chamadosAbertos,
    chamadosEscolhidos,
    chamadosResolvidos,
    fetchChamados,
    filteredChamadosAbertos,
    filteredChamadosEscolhidos,
    filteredChamadosResolvidos,
    handleEscolherChamado,
    handleFilterAbertosChange,
    handleFilterEscolhidosChange,
    handleFilterResolvidosChange,
    handleRefresh,
    handleRespostaSuccess,
    loading,
    refreshing,
    selectedChamado,
    selectedFilterAbertos,
    selectedFilterEscolhidos,
    selectedFilterResolvidos,
    setSelectedChamado,
  };
}
