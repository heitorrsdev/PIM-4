import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';
const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  label: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    marginBottom: 4,
  },
  dropdown: {
    backgroundColor: 'transparent',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    cursor: 'pointer',
    height: 44,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    backgroundColor: colors.background,
  },
});

export default styles;
