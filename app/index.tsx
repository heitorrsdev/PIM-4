import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import styles from './sytyle';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Link href='/login' asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>
      <Link href='/register' asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </Pressable>
      </Link>
    </View>
  );
}
