import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
  },
  title: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    marginBottom: 4,
  },
  desc: {
    color: colors.textSecondary,
    marginBottom: 6,
  },
  meta: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.small,
  },
});

export default styles;
