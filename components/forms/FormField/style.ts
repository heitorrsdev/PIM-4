import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    color: '#4B5563',
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    padding: 12,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: '#DC2626',
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
  },
});

export default styles;
