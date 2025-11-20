import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    cursor: 'pointer',
  } as any,
  hovered: {
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: colors.primary,
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  } as any, // React Native não suporta 'cursor', por isso o 'as any'
  text: {
    color: 'white',
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium,
  },
});

export default styles;
