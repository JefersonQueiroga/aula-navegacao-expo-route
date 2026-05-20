import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categorias, getLivrosByCategoria } from '../../data/livros';

export default function CategoriasScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.titulo}>Categorias</Text>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => {
          const total = getLivrosByCategoria(item.slug).length;
          return (
            <Link href={`/categoria/${item.slug}`} asChild>
              <Pressable style={styles.card}>
                <Text style={styles.emoji}>{item.emoji}</Text>
                <View style={styles.infos}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.qtd}>{total} {total === 1 ? 'livro' : 'livros'}</Text>
                </View>
              </Pressable>
            </Link>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 16, paddingVertical: 12 },
  lista: { paddingHorizontal: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#f4f4f5',
    borderRadius: 12,
  },
  emoji: { fontSize: 36 },
  infos: { flex: 1 },
  nome: { fontSize: 18, fontWeight: '600' },
  qtd: { fontSize: 14, color: '#666', marginTop: 2 },
});
