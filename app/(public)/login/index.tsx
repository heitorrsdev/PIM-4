import { View } from 'react-native';

import LoginForm from './components/loginForm';
import styles from './style';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}
