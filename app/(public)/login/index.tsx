import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';

import LoginForm from './components/loginForm';
import styles from './style';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.headerSection}>
            <View style={styles.logoContainer}>
              <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.welcomeText}>Bem-vindo ao</Text>
            <Text style={styles.brandName}>Suptech</Text>
            <Text style={styles.tagline}>Software & Innovation</Text>
            <Text style={styles.subtitle}>Sistema de Gerenciamento de Chamados</Text>
          </View>

          <View style={styles.formSection}>
            <LoginForm />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
