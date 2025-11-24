import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  halfSection: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  label: {
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
    color: colors.textSecondary,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: typography.fontSize.normal,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
    color: '#fff',
  },
  statusBadge: {
    backgroundColor: colors.primary,
  },
  statusClosed: {
    backgroundColor: '#DC2626',
  },
  priorityHigh: {
    backgroundColor: '#DC2626',
  },
  priorityMedium: {
    backgroundColor: '#F59E0B',
  },
  priorityLow: {
    backgroundColor: '#10B981',
  },
  divider: {
    height: 1,
    backgroundColor: colors.background,
    marginVertical: 16,
  },
});

export default styles;
