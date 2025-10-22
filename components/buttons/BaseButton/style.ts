import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0051a8',
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
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  } as any, // React Native não suporta 'cursor', por isso o 'as any'
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
