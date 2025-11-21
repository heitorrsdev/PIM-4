import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    cursor: 'pointer',
    elevation: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
    shadowColor: colors.primary,
    shadowOffset: {
      height: 4,
      width: 0,
    } as any, // React Native não suporta 'cursor', por isso o 'as any'
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  hovered: {
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: '#9CA3AF',
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    shadowOpacity: 0.1,
  } as any,
  text: {
    color: 'white',
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});

export default styles;
