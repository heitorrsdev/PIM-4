import React from 'react';
import { Text, View } from 'react-native';

import { BaseButton } from '@/components/buttons';
import { Chamado } from '@/services/chamados/chamado.types';

import styles from './style';

type Filters = 'Todos' | 'Baixa' | 'Média' | 'Alta';

interface Props {
  chamados: Chamado[];
  selectedFilter: Filters;
  onFilterChange: (filter: Filters) => void;
}

const filters: Filters[] = ['Todos', 'Baixa', 'Média', 'Alta'];

const getFilterCount = (chamados: Chamado[], filter: Filters): number => {
  if (filter === 'Todos') {
    return chamados.length;
  }
  return chamados.filter(chamado => chamado.prioridade === filter).length;
};

export function TecnicoFilterButtons({
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
