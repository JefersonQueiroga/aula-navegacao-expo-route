import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { buscarLivros } from '../data/livros';

// Esta tela é declarada como modal lá no _layout raiz
// (presentation: 'modal'). O Expo Router cuida da animação de subir
// "por cima" da tela atual em iOS/Android e de uma sobreposição na web.
export default function BuscarScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const resultados = buscarLivros(query);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por título ou autor..."
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        <Pressable onPress={() => router.back()} style={styles.botaoFechar}>
          <Text style={styles.botaoFecharTexto}>Fechar</Text>
        </Pressable>
      </View>

      {query.length === 0 ? (
        <Text style={styles.dica}>Digite algo para buscar.</Text>
      ) : resultados.length === 0 ? (
        <Text style={styles.dica}>Nenhum livro encontrado.</Text>
      ) : (
        <FlatList
          data={resultados}
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
  header: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  botaoFechar: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
  },
  botaoFecharTexto: { fontWeight: '600' },
  dica: { padding: 24, color: '#666', textAlign: 'center' },
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
