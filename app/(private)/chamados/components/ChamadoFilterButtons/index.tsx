import React from 'react';
import { Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { Chamado } from '@/services/chamados/chamado.types';

import styles from './style';

type StatusFilter = 'Todos' | 'Aberto' | 'Pendente' | 'Fechado';

interface Props {
  chamados: Chamado[];
  selectedFilter: StatusFilter;
  onFilterChange: (filter: StatusFilter) => void;
}

const filters: StatusFilter[] = ['Todos', 'Aberto', 'Pendente', 'Fechado'];

const getFilterCount = (chamados: Chamado[], filter: StatusFilter): number => {
  if (filter === 'Todos') {
    return chamados.length;
  }
  return chamados.filter(c => c.status === filter).length;
};

export function ChamadoFilterButtons({
  chamados,
  selectedFilter,
  onFilterChange,
}: Props) {
  return (
    <View style={styles.filterContainer}>
      {filters.map(filter => (
        <BaseButton
          key={filter}
          onPress={() => onFilterChange(filter)}
          style={[
            styles.filterButton,
            selectedFilter === filter && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === filter && styles.filterButtonTextActive,
            ]}
          >
            {filter} ({getFilterCount(chamados, filter)})
          </Text>
        </BaseButton>
      ))}
    </View>
  );
}
