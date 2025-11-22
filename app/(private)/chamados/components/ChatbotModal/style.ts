import { StyleSheet } from 'react-native';
import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: '#fff',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: typography.fontWeight.bold,
    lineHeight: 24,
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: typography.fontSize.normal,
    color: colors.textSecondary,
  },
  // Estilos para mobile
  mobileContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mobileContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  mobileTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: 12,
  },
  mobileDescription: {
    fontSize: typography.fontSize.normal,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  openButton: {
    width: '100%',
    backgroundColor: '#7C3AED',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  openButtonText: {
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.bold,
    color: '#fff',
  },
  cancelButton: {
    width: '100%',
    backgroundColor: colors.background,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.bold,
    color: colors.textSecondary,
  },
});

export default styles;
