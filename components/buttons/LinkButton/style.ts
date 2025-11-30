import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    height: 36,
    minHeight: 36,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.medium,
    textTransform: 'none',
  },
});

export default styles;
