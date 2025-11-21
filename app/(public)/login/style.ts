import { Dimensions, StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: isSmallScreen ? 24 : 40,
    paddingHorizontal: isSmallScreen ? 16 : 24,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: isSmallScreen ? 'column' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isSmallScreen ? 32 : 48,
    maxWidth: 1200,
    alignSelf: 'center',
  },
  headerSection: {
    flex: isSmallScreen ? 0 : 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500,
    width: '100%',
  },
  logoContainer: {
    width: isSmallScreen ? 160 : 220,
    height: isSmallScreen ? 160 : 220,
    marginBottom: isSmallScreen ? 20 : 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: isSmallScreen ? 160 : 220,
    height: isSmallScreen ? 160 : 220,
  },
  logoText: {
    fontSize: 72,
    fontWeight: typography.fontWeight.bold,
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  welcomeText: {
    fontSize: isSmallScreen ? typography.fontSize.normal : typography.fontSize.large,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  brandName: {
    fontSize: isSmallScreen ? 32 : 42,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: 4,
    letterSpacing: 1.2,
  },
  tagline: {
    fontSize: isSmallScreen ? typography.fontSize.small : typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    marginBottom: isSmallScreen ? 16 : 20,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: isSmallScreen ? typography.fontSize.small : typography.fontSize.normal,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: isSmallScreen ? 0 : 20,
    lineHeight: 20,
  },
  formSection: {
    flex: isSmallScreen ? 0 : 1,
    maxWidth: 500,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: isSmallScreen ? 20 : 24,
    padding: isSmallScreen ? 24 : 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default styles;
