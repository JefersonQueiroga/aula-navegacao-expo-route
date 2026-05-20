import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  Categoria,
  getLivrosByCategoria,
  getNomeCategoria,
} from '../../data/livros';

export default function CategoriaScreen() {
  // Mesma ideia da tela [id]: useLocalSearchParams para ler o param da URL.
  // Aqui o segmento é [slug], então tipamos como { slug: Categoria }.
  const { slug } = useLocalSearchParams<{ slug: Categoria }>();
  const livros = getLivrosByCategoria(slug);
  const nome = getNomeCategoria(slug);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: nome }} />

      {livros.length === 0 ? (
        <Text style={styles.vazio}>Nenhum livro nesta categoria.</Text>
      ) : (
        <FlatList
          data={livros}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <Link href={`/livro/${item.id}`} asChild>
              <Pressable style={styles.card}>
                <Text style={styles.capa}>{item.capa}</Text>
                <View style={styles.infos}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.autor}>{item.autor}</Text>
                </View>
              </Pressable>
            </Link>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  vazio: { padding: 16, color: '#666' },
  lista: { padding: 16, gap: 12 },
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
  titulo: { fontSize: 16, fontWeight: '600' },
  autor: { fontSize: 14, color: '#666', marginTop: 2 },
});
