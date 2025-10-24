import { colors, typography } from '@/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  pressed: {
    opacity: 0.8,
  },
  hovered: {
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: colors.secondary,
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  } as any, // React Native não suporta 'cursor', por isso o 'as any'
  text: {
    color: 'white',
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as '500',
  },
});

export default styles;
