import { View } from 'react-native';

import styles from '../../style';
import LoginForm from './components/loginForm';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}
