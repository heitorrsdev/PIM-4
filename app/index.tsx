import { BaseButton } from '@/components/button';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import styles from './sytyle';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Link href='/login' asChild>
        <BaseButton>
          <Text>Login</Text>
        </BaseButton>
      </Link>
      <Link href='/register' asChild>
        <BaseButton>
          <Text>Criar conta</Text>
        </BaseButton>
      </Link>
    </View>
  );
}
