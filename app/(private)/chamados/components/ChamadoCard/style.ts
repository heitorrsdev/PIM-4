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
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
  },
  menuButton: {
    padding: 4,
    marginLeft: 8,
  },
  menuButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
    minWidth: 160,
  },
  menuItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemDelete: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontSize: typography.fontSize.normal,
    color: colors.textPrimary,
  },
  menuItemDeleteText: {
    color: '#dc3545',
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
