import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// +not-found.tsx é uma convenção do Expo Router para tratar
// rotas que não existem. Funciona como qualquer outra tela.
export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Página não encontrada' }} />
      <Text style={styles.titulo}>Esta página não existe</Text>
      <Link href="/" style={styles.link}>
        Voltar para a Biblioteca
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  titulo: { fontSize: 18, fontWeight: '600' },
  link: { color: '#0a7ea4', fontSize: 16, fontWeight: '600' },
});
