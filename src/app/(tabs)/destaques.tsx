import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { livros } from '../../data/livros';

// TODO (aula futura): quando aprenderem Context/AsyncStorage,
// transformar essa aba em "Favoritos" interativos, onde o usuário
// pode marcar/desmarcar livros e a lista persiste entre sessões.
// Por enquanto, "destaque" é uma flag estática no arquivo de dados.
export default function DestaquesScreen() {
  const destaques = livros.filter((l) => l.destaque);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.titulo}>Destaques do curso</Text>

      <FlatList
        data={destaques}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
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
  titulo: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 16, paddingVertical: 12 },
  lista: { paddingHorizontal: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  capa: { fontSize: 40 },
  infos: { flex: 1 },
  tituloLivro: { fontSize: 16, fontWeight: '600' },
  autor: { fontSize: 14, color: '#666', marginTop: 2 },
});
