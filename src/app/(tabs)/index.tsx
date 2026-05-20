import { Link, useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { livros } from '../../data/livros';

export default function LivrosScreen() {
  // useRouter dá acesso imperativo ao roteador (push/back/replace).
  // Usamos aqui pra abrir o modal de busca a partir de um botão.
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Biblioteca</Text>
        <Pressable
          style={styles.botaoBuscar}
          onPress={() => router.push('/buscar')}
        >
          <Text style={styles.botaoBuscarTexto}>Buscar</Text>
        </Pressable>
      </View>

      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          // <Link> declarativo: navega ao tocar.
          // asChild faz o <Pressable> receber o comportamento de link.
          <Link href={`/livro/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.capa}>{item.capa}</Text>
              <View style={styles.infos}>
                <Text style={styles.tituloLivro}>{item.titulo}</Text>
                <Text style={styles.autor}>{item.autor}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  botaoBuscar: {
    backgroundColor: '#0a7ea4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  botaoBuscarTexto: { color: '#fff', fontWeight: '600' },
  lista: { paddingHorizontal: 16, paddingBottom: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#f4f4f5',
    borderRadius: 12,
  },
  capa: { fontSize: 40 },
  infos: { flex: 1 },
  tituloLivro: { fontSize: 16, fontWeight: '600' },
  autor: { fontSize: 14, color: '#666', marginTop: 2 },
});
