import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0A2E50',
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
    backgroundColor: '#1E3A8A',
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  } as any, // React Native não suporta 'cursor', por isso o 'as any'
  text: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
