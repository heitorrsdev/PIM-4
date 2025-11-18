import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export default StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  closeText: {
    color: theme.colors.textSecondary,
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
  },
  content: {
    maxHeight: '80%',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    maxHeight: '90%',
    maxWidth: 600,
    width: '90%',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
  },
});
