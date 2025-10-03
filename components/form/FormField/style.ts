import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, marginBottom: 4, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: { borderColor: 'red' },
  error: { color: 'red', marginTop: 4, fontSize: 12 },
});

export default styles;
